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
