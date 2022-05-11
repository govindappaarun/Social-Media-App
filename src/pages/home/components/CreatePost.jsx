import React, { useEffect, useRef, useState } from "react";
import { RiImage2Line, RiCloseLine, RiEditLine } from "react-icons/ri";
import { Button, Image, Input, Box } from "src/components";
import { Wrapper, Header, Footer, Main } from "./CreatePost.styled";
import apiCloudinary from "src/hooks/useCloudinary";
import { useDispatch } from "react-redux";
import { createAPost } from "src/redux/reducers/postsSlice";

export default function CreatePost({ post }) {
  const mainRef = useRef(null);
  const fileInput = useRef(null);

  const [isEditing, setIsEditing] = useState(true);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mainRef.curernt) {
      mainRef.current.focus();
    }
    if (post) {
      setIsEditing(true);
      mainRef.current.innerText = post.content;
      setImage(post.mediaUrl);
    }
  }, []);

  const clickFileInput = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleImgPick = (e) => {
    const { target } = e;
    const [file] = target.files;
    if (file) {
      setImage(file);
    }
  };

  const clearImage = () => {
    setImage(null);
  };

  const onPublish = async () => {
    if (!isEditing) {
      const mediaUrl = image ? await apiCloudinary(image) : undefined;
    }
    dispatch(
      createAPost({
        postData: {
          content: mainRef.current.innerText,
          mediaUrl: image,
        },
      })
    ).then((response) => {
      console.log({ response });
      mainRef.current.innerText = "Enter something here";
      clearImage();
    });
  };

  return (
    <Wrapper>
      <Header>
        <RiEditLine /> Create Post
      </Header>
      <Box>
        {image && (
          <>
            <Image
              className="img-preview"
              src={image && !isEditing ? URL.createObjectURL(image) : image}
              alt=" "
            />
          </>
        )}
        <Input
          className="hidden"
          ref={fileInput}
          type="file"
          onChange={handleImgPick}
        />
      </Box>
      <Main
        ref={mainRef}
        auto
        contentEditable={isEditing}
        suppressContentEditableWarning
      >
        Enter something here
      </Main>
      <Footer display="flex" justifyContent="end" gap="sm">
        <RiImage2Line onClick={clickFileInput} cursor="pointer" />
        <Button
          color="primary"
          radius="4px"
          disabled={!image}
          onClick={onPublish}
        >
          Publish
        </Button>
      </Footer>
    </Wrapper>
  );
}
