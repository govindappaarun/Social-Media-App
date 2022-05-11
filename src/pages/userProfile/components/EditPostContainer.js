import React from "react";
import EditPost from "./EditPost";

function EditPostContainer({ ...rest }) {
  return (
    <>
      <div>Edit Post</div>
      <EditPost {...rest} />
    </>
  );
}

export default EditPostContainer;
