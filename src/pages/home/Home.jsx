import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { NavBar } from "src/components";
import { LinkButton } from "src/components/Button";
import { getAllUsers, getBookmarks } from "src/redux/reducers/usersSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <NavBar>
        <LinkButton color="primary" to="feed">
          Feed
        </LinkButton>
        <LinkButton color="primary" to="bookmarks">
          Bookmarks
        </LinkButton>
        <LinkButton color="primary" to="users">
          Users
        </LinkButton>
        <LinkButton color="primary" to="profile/me">
          Profile
        </LinkButton>
      </NavBar>
      <Outlet />
    </div>
  );
}
