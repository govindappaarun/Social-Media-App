import React, { useEffect, useState } from "react";
import { Typography } from "src/components";
import { useAuth } from "src/contexts";
import UserService from "src/services/userService";
import UserCard from "./components/UserCard";
import Wrapper from "./Users.styled";

export default function Users() {
  const [users, setUsers] = useState(null);
  const { authState } = useAuth();

  useEffect(() => {
    UserService.getAllUsers().then((response) => {
      setUsers(
        response.users.filter((user) => user._id !== authState?.user?._id)
      );
    });
  }, []);

  const isUserFollowed = (user) => {
    return user.followers.indexOf(authState.user?._id) >= 0;
  };

  const onFollowUser = (user, isFollowed) => {
    if (isFollowed) {
      UserService.unfollowUser(user._id).then(() => {
        console.log("unfollowed");
      });
    } else {
      UserService.followUser(user._id).then(() => {
        console.log("followed");
      });
    }
  };

  return (
    <Wrapper>
      <Typography>Users to follow</Typography>
      {users &&
        users.map((user, index) => {
          return (
            <UserCard
              key={index}
              user={user}
              onFollowUser={onFollowUser}
              isFollowed={isUserFollowed(user)}
            />
          );
        })}
    </Wrapper>
  );
}
