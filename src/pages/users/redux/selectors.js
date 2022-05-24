import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "src/contexts";

export const useUserList = () => {
  const { authState } = useAuth();
  const allUsers = useSelector((state) => state.users.users);

  return useMemo(
    () =>
      allUsers.filter(
        ({ firstName, lastName }) =>
          firstName !== authState.user?.firstName &&
          lastName !== authState.user?.lastName
      ),
    [allUsers, authState]
  );
};

export const useCurrentUser = () => {
  return useSelector((state) => state.users.currentUser);
};

export const useUsers = () => {
  return useSelector((state) => state.users.users);
};

export const useUserFeed = (allPosts) => {
  const users = useUsers();
  const { authState } = useAuth();
  const currentUser = users?.find(
    (user) => user.username === authState.user.username
  );
  let following = currentUser ? currentUser.following : [];
  following = following.map(({ username }) => username);

  // add current user
  following.push(authState.user.username);

  // filter allposts to give
  return allPosts.filter((post) => following.indexOf(post.username) >= 0) || [];
};
