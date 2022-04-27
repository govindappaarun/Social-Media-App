import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { NavBar, Typography } from "src/components";
import { LinkButton } from "src/components/Button";
import Post from "src/components/Post";
import { useAlert } from "src/contexts/alert.context";
import { getBookmarks } from "src/redux/reducers/usersSlice";
import Users from "../users";

export default function Home() {
  const dispatch = useDispatch();
  const { dispatchAlert } = useAlert();

  useEffect(() => {
    dispatch(getBookmarks());
    dispatchAlert({ message: "test alert", color: "primary" });
  }, []);

  return (
    <div>
      <Typography variant="h3">Welcome </Typography>
      <NavBar>
        <LinkButton color="primary" to="feed">
          My Feed
        </LinkButton>
        <LinkButton color="primary" to="bookmarks">
          My Bookmarks
        </LinkButton>
      </NavBar>
      <Post />
      <Users />
      <Outlet />
    </div>
  );
}
