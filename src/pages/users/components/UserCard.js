import React from "react";
import { Avatar, Button, Typography } from "src/components";
import { User } from "../Users.styled";

export default function UserCard({
  user,
  avatarText = "AG",
  onFollowUser,
  isFollowed,
  ...rest
}) {
  return (
    <User display="flex" gap="sm" alignItems="center" {...rest}>
      <Avatar type="span" size="sm" text={avatarText} />
      <Typography>
        {user.firstName} {user.lastName}
      </Typography>
      <Button
        outline
        color={isFollowed ? "warning" : "secondary"}
        radius="4px"
        className="ml-auto"
        onClick={(e) => {
          e.stopPropagation();
          onFollowUser(user, isFollowed);
        }}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </User>
  );
}
