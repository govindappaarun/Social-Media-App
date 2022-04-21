import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "src/components";
import UserCard from "./components/UserCard";
import Wrapper from "./Users.styled";

import {
  followAUser,
  getAllUsers,
  unfollowAUser,
} from "src/redux/reducers/usersSlice";
import { useAuth } from "src/contexts";
import { useUserList } from "./redux/selectors";

export default function Users() {
  const { authState } = useAuth();
  const dispatch = useDispatch();
  const users = useUserList();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const isUserFollowed = (user) => {
    return user.followers.find(
      ({ firstName, lastName }) =>
        firstName === authState.user?.firstName &&
        lastName === authState.user?.lastName
    );
  };

  const onFollowUser = (user, isFollowed) => {
    if (isFollowed) {
      dispatch(unfollowAUser(user));
    } else {
      dispatch(followAUser(user));
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
