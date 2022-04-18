import React, { useEffect, useRef, useState } from "react";
import { RiImage2Line, RiCloseLine, RiEditLine } from "react-icons/ri";
import apiCloudinary from "src/hooks/useCloudinary";
import PostsService from "src/services/postsService";
import Box from "../Box";
import Button from "../Button";
import Image from "../Image";
import Input from "../Input";
import { Wrapper, Header, Footer, Main } from "./Post.styled";

export default function Post() {
  const mainRef = useRef(null);
  const fileInput = useRef(null);

  const [isEditing, setIsEditing] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (mainRef.curernt) {
      mainRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (image) {
      // useCloudinary(image);
    }
  }, [image]);

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

  const onPublish = () => {
    PostsService.createPost({
      postData: { content: mainRef.current.innerText },
    }).then((response) => {
      console.log({ response });
      mainRef.current.innerText = "Enter something here";
    });
  };

  return (
    <Wrapper>
      <Header>
        <RiEditLine /> Create Post
      </Header>
      <Box>
        {image && <RiCloseLine className="icon-close" onClick={clearImage} />}
        <Image
          className="img-preview"
          src={image ? URL.createObjectURL(image) : ""}
          alt=" "
        />
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
        <Button color="primary" radius="4px" onClick={onPublish}>
          Publish
        </Button>
      </Footer>
    </Wrapper>
  );
}
