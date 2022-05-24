import React, { useState } from "react";
import { useAuth } from "src/contexts";
import Avatar from "../Avatar/Avatar";
import Button from "../Button";
import Image from "../Image";
import { TextArea, Wrapper } from "./CommentBox.styled";

export default function CommentBox({
  onSave = () => {},
  placeholder,
  navigateToProfile,
  getProfilePic,
  ...rest
}) {
  const [commentText, setCommentText] = useState("");
  const { authState } = useAuth();
  const username = authState.user.username;

  const onPostComment = () => {
    onSave(commentText);
    setCommentText("");
  };

  return (
    <Wrapper display="flex" alignItems="center" gap="md" {...rest}>
      <Image
        src={getProfilePic(username)}
        className="img-responsive img-round avatar"
        onClick={(e) => navigateToProfile(e, username)}
      />
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
