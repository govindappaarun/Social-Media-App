import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/singup";
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
  },
];

export default () => useRoutes([...publicRoutes, ...privateRoutes]);
