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
import { useNavigate } from "react-router-dom";

export default function Users() {
  const { authState } = useAuth();
  const dispatch = useDispatch();
  const users = useUserList();
  const navigate = useNavigate();

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

  const viewProfile = ({ username }) => {
    navigate(`profile/${username}`);
  };

  return (
    <Wrapper>
      <Typography variant="h2">Users to follow</Typography>
      {users &&
        users.map((user, index) => {
          return (
            <UserCard
              key={index}
              className="user"
              user={user}
              onFollowUser={onFollowUser}
              isFollowed={isUserFollowed(user)}
              onClick={() => viewProfile(user)}
            />
          );
        })}
    </Wrapper>
  );
}
