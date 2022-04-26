import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { NavBar, Typography } from "src/components";
import { LinkButton } from "src/components/Button";
import Post from "src/components/Post";
import { getBookmarks } from "src/redux/reducers/usersSlice";
import Users from "../users";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
  }, []);

  return (
    <div>
      <Typography variant="h3">Welcome </Typography>
      <NavBar>
        <LinkButton color="primary" to="feed">
          My Feed
        </LinkButton>
      </NavBar>
      <Post />
      <Users />
      <Outlet />
    </div>
  );
}
