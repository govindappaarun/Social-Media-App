import { useRoutes } from "react-router-dom";
import Bookmarks from "./pages/bookmarks";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/singup";
import UserFeed from "./pages/userFeed";
import Users from "./pages/users";
import UserProfile from "./pages/userProfile";
import ViewPost from "./pages/viewPost";
import Welcome from "./pages/welcome";
import SecureRoute from "./SecureRoute";

const publicRoutes = [
  { path: "/", element: <Welcome /> },
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
        element: <div>Create Post</div>,
      },
      {
        path: "feed/*",
        element: <UserFeed />,
      },
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
