import React, { useEffect, useRef, useState } from "react";
import { RiImage2Line, RiCloseLine, RiEditLine } from "react-icons/ri";
import PostsService from "src/services/postsService";
import { Button, Image, Input, Box } from "src/components";
import { Wrapper, Header, Footer, Main } from "./CreatePost.styled";
import apiCloudinary from "src/hooks/useCloudinary";

export default function CreatePost() {
  const mainRef = useRef(null);
  const fileInput = useRef(null);

  const [isEditing, setIsEditing] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (mainRef.curernt) {
      mainRef.current.focus();
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
    const mediaUrl = image ? await apiCloudinary(image) : undefined;
    PostsService.createPost({
      postData: {
        content: mainRef.current.innerText,
        mediaUrl,
      },
    }).then((response) => {
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
              src={image ? URL.createObjectURL(image) : ""}
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
