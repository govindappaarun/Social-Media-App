import React from "react";
import EditPost from "./EditPost";

function CreatePostContainer({ ...rest }) {
  return (
    <>
      <div>Create Post</div>
      <EditPost {...rest} />
    </>
  );
}

export default CreatePostContainer;
