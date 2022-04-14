import React, { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts";

type Props = {
  children: React.ReactNode;
};

export default function SecureRoute({ children }: Props) {
  const { authState } = useAuth();
  const location = useLocation();

  return authState.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
