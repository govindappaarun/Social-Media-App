import { useRoutes } from "react-router-dom";
import Bookmarks from "./pages/bookmarks";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/singup";
import UserFeed from "./pages/userFeed";
import Users from "./pages/users";
import UserProfile from "./pages/userProfile";
import ViewPost from "./pages/viewPost";
import SecureRoute from "./SecureRoute";
import CreatePost from "./pages/home/components";
import Explore from "./pages/explore";

const publicRoutes = [
  { path: "/", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
];

const privateRoutes = [
  {
    path: "/home",
    element: (
      <SecureRoute>
        <Home />
      </SecureRoute>
    ),
    children: [
      {
        index: true,
        element: <UserFeed />,
      },
      {
        path: "createPost",
        element: <CreatePost />,
      },
      {
        path: "feed/*",
        element: <UserFeed />,
      },
      { path: "explore", element: <Explore /> },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "viewPost/:postId",
        element: <ViewPost />,
      },
      {
        path: "profile/:userId",
        element: <UserProfile />,
      },
    ],
  },
];

export default () => useRoutes([...publicRoutes, ...privateRoutes]);
