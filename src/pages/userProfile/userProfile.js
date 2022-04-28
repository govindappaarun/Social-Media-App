import { useEffect, useRef, useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { Box, Image, Input, Typography } from "src/components";
import { PostCard } from "src/components/Card";
import apiCloudinary from "src/hooks/useCloudinary";
import PostsService from "src/services/postsService";
import UserService from "src/services/userService";
import { Wrapper } from "./userProfile.styled";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [posts, setPosts] = useState(null);
  const [image, setImage] = useState(null);
  const [wallpaper, setWallpaper] = useState(null);
  const fileInput = useRef(null);
  const fileInput2 = useRef(null);
  const { userId } = useParams();

  useEffect(() => {
    let user;
    if (userId && userId === "me") {
      user = JSON.parse(localStorage.getItem("user"));
    }
    UserService.getUser(user ? user.username : userId).then((response) => {
      setUserProfile(response.user);
    });

    PostsService.getMyPosts(user ? user.username : userId).then((response) => {
      setPosts(response.posts);
    });
  }, []);

  useEffect(() => {
    if (image) {
      uploadImage("avatar", image);
    }
  }, [image, uploadImage]);

  useEffect(() => {
    if (wallpaper) {
      uploadImage("wallpaper", wallpaper);
    }
  }, [wallpaper, uploadImage]);

  const clickFileInput = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const clickFileInput2 = () => {
    if (fileInput2.current) {
      fileInput2.current.click();
    }
  };

  const handleImgPick = (e) => {
    const { target } = e;
    const [file] = target.files;
    if (file) {
      setImage(file);
    }
  };

  const handleWallPaperPick = (e) => {
    const { target } = e;
    const [file] = target.files;
    if (file) {
      setWallpaper(file);
    }
  };

  async function uploadImage(key, file) {
    const imgUrl = await apiCloudinary(file);
    UserService.editUser({ [key]: imgUrl }).then((response) => {
      console.log({ response });
    });
  }

  return (
    <Wrapper>
      {userProfile && (
        <>
          <Box className="wallpaper">
            {userProfile.wallpaper && (
              <Image className="img-responsive" src={userProfile.wallpaper} />
            )}
            <HiOutlineCamera className="camera" onClick={clickFileInput2} />
          </Box>
          <Box display="flex" wrap="wrap" gap="lg">
            <Box>
              {image && (
                <Image
                  className="img-preview"
                  src={image ? URL.createObjectURL(image) : ""}
                  alt="Pick an Image"
                />
              )}
              <Box className="profile-pic">
                <Image
                  className="img-preview"
                  src={userProfile.avatar || "/default-profile.jpg"}
                  alt="Profile Pic"
                />
                <HiOutlineCamera className="camera" onClick={clickFileInput} />
              </Box>
              <Input
                className="hidden"
                ref={fileInput}
                type="file"
                onChange={handleImgPick}
              />
              <Input
                className="hidden"
                ref={fileInput2}
                type="file"
                onChange={handleWallPaperPick}
              />
              <Typography variant="h2">
                Name: {userProfile.firstName} {userProfile.lastName}
              </Typography>
              <Typography variant="h4">
                Bio: {userProfile.bio || "Add your bio here"}
              </Typography>

              <Typography variant="h3">{userProfile.email}</Typography>
              <Typography
                variant="h3"
                as="a"
                href={userProfile.profile}
                color="primary"
              >
                {userProfile.github}
              </Typography>
            </Box>
            <Box className="posts-section">
              <Typography variant="h2" className="heading">
                My Posts ( {posts && posts.length} )
              </Typography>
              {posts && (
                <Box display="flex" gap="md" wrap="wrap">
                  {posts.map((post) => {
                    return <PostCard key={post._id} post={post} />;
                  })}
                </Box>
              )}
            </Box>
          </Box>
        </>
      )}
    </Wrapper>
  );
}
