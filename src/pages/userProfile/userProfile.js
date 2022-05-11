import { useEffect, useRef, useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Image, Input, Modal, Typography } from "src/components";
import { PostCard } from "src/components/Card";
import { useAuth } from "src/contexts";
import apiCloudinary from "src/hooks/useCloudinary";
import {
  deleteAPost,
  editAPost,
  getAllPosts,
} from "src/redux/reducers/postsSlice";
import { editUserProfile, getUserProfile } from "src/redux/reducers/usersSlice";
import PostsService from "src/services/postsService";
import UserService from "src/services/userService";
import { useCurrentUser } from "../users/redux/selectors";
import CreatePostContainer from "./components/CreatePostContainer";
import EditPost from "./components/EditPost";
import EditPostContainer from "./components/EditPostContainer";
import EditProfile from "./components/EditProfile";
import { Wrapper } from "./userProfile.styled";

export default function UserProfile() {
  const [image, setImage] = useState(null);
  const [wallpaper, setWallpaper] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const fileInput = useRef(null);
  const fileInput2 = useRef(null);
  const { userId } = useParams();
  const { authState } = useAuth();
  const dispatch = useDispatch();
  const userProfile = useCurrentUser();

  const currentUser = userId === "me" ? authState.user.username : userId;
  const posts = useSelector((state) => state.userFeed.posts)?.filter(
    ({ username }) => username === currentUser
  );

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  useEffect(() => {
    dispatch(getUserProfile(currentUser));
    setIsEditable(userId === "me");
  }, [userId]);

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

  const editProfile = () => {
    setIsEditing(true);
  };

  const saveProfile = (values) => {
    dispatch(editUserProfile(values)).then(() => {
      setIsEditing(false);
    });
  };

  const onDeletePost = (e, postId) => {
    e.stopPropagation();
    dispatch(deleteAPost(postId));
  };

  const onEditPost = (e, post) => {
    e.stopPropagation();
    setIsEditingPost(true);
    setCurrentPost(post);
  };

  const onSavePost = () => {
    setIsEditingPost(false);
    setCurrentPost(null);
  };

  const onCreatePost = () => {
    setIsCreatingPost(false);
    setCurrentPost(null);
  };

  return (
    <Wrapper>
      {userProfile && (
        <>
          <Box className="wallpaper">
            {userProfile.wallpaper && (
              <Image className="img-responsive" src={userProfile.wallpaper} />
            )}
            {isEditable && (
              <HiOutlineCamera className="camera" onClick={clickFileInput2} />
            )}
          </Box>
          <Box display="flex" wrap="wrap" gap="lg">
            <Box>
              <Box className="profile-pic">
                <Image
                  className="img-preview"
                  src={userProfile.avatar || "/default-profile.jpg"}
                  alt="Profile Pic"
                />
                {isEditable && (
                  <HiOutlineCamera
                    className="camera"
                    onClick={clickFileInput}
                  />
                )}
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
              {isEditable && <RiEdit2Line onClick={() => editProfile()} />}
              <Typography variant="h3">{userProfile.email}</Typography>
              <Typography
                variant="h3"
                as="a"
                href={userProfile.profile}
                color="primary"
              >
                {userProfile.profileUrl}
              </Typography>
            </Box>

            <Modal
              open={isEditing}
              onClose={() => setIsEditing(false)}
              className="profile-modal"
            >
              <EditProfile profile={userProfile} onSaveprofile={saveProfile} />
            </Modal>

            <Modal
              open={isEditingPost || isCreatingPost}
              onClose={() => {
                setIsEditingPost(false);
                setIsCreatingPost(false);
              }}
              className="profile-modal"
            >
              {isEditingPost && (
                <EditPostContainer post={currentPost} onSavePost={onSavePost} />
              )}
              {isCreatingPost && (
                <CreatePostContainer onCreatePost={onCreatePost} />
              )}
            </Modal>

            <Box className="posts-section">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h2" className="heading">
                  My Posts ( {posts && posts.length} )
                </Typography>
                <Button color="success" onClick={() => setIsCreatingPost(true)}>
                  Create
                </Button>
              </Box>
              {posts && (
                <Box display="flex" gap="md" wrap="wrap">
                  {posts.map((post) => {
                    return (
                      <PostCard
                        key={post._id}
                        post={post}
                        deletePost={onDeletePost}
                        editPost={onEditPost}
                      />
                    );
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
