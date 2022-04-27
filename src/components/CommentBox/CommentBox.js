import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button";
import { TextArea, Wrapper } from "./CommentBox.styled";

export default function CommentBox({
  onSave = () => {},
  placeholder,
  ...rest
}) {
  const [commentText, setCommentText] = useState("");

  const onPostComment = () => {
    onSave(commentText);
    setCommentText("");
  };

  return (
    <Wrapper display="flex" alignItems="center" gap="md" {...rest}>
      <Avatar size="sm" type="span" text="AG" />
      <TextArea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        cols="40"
        rows="4"
        placeholder={placeholder || "Add how you feel about this"}
      />
      <Button color="secondary" radius="4px" onClick={onPostComment}>
        Post
      </Button>
    </Wrapper>
  );
}
