import React from "react";
import styled from "styled-components";
import EditPost from "./EditPost";
const Wrapper = styled.div`
  color: ${(p) => p.theme.base.contrast};
  font-size: 1.25rem;
`;

function CreatePostContainer({ ...rest }) {
  return (
    <Wrapper>
      <div>Create Post</div>
      <EditPost {...rest} />
    </Wrapper>
  );
}

export default CreatePostContainer;
