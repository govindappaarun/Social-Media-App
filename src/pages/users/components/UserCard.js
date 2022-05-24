import React from "react";
import { Button, Image, Typography } from "src/components";
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
      <Image
        className="img-responsive img-round"
        src={user.avatar || "/default-profile.jpg"}
      />
      <Typography className="profile-name">
        {user.firstName} {user.lastName}
      </Typography>
      <Button
        outline
        color={isFollowed ? "warning" : "success"}
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
