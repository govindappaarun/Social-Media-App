import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreatePostContainer from "../userProfile/components/CreatePostContainer";
const Wrapper = styled.div`
  margin: 2rem 1rem;
`;
export default function CreatePost() {
  const navigate = useNavigate();
  const onCreatePost = () => {
    navigate("/home/profile/me");
  };
  return (
    <Wrapper>
      <CreatePostContainer onCreatePost={onCreatePost} />
    </Wrapper>
  );
}
