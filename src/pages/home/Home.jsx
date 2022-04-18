import { Outlet } from "react-router-dom";
import { NavBar, Typography } from "src/components";
import { LinkButton } from "src/components/Button";
import Post from "src/components/Post";

export default function Home() {
  return (
    <div>
      <Typography variant="h3">Welcome </Typography>
      <NavBar>
        <LinkButton color="primary" to="feed">
          My Feed
        </LinkButton>
      </NavBar>
      <Post />
      <Outlet />
    </div>
  );
}
