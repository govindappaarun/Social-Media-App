import React, { useEffect } from "react";
import { Wrapper, StyledForm } from "./Login.styled";
import { Input, Button, Box, Typography } from "src/components";
import { useForm } from "src/hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts";
import authService from "src/services/authService";
import { InputPassword } from "src/components/Input";

export default function Login() {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { state } = useLocation();

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate("/home"); // auto redirect to home if logged in
    }
  }, [authState.isLoggedIn]);

  const initialState = {
    username: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(() => {
    authService
      .doLogin(values)
      .then((result) => {
        localStorage.setItem("token", result.encodedToken);
        localStorage.setItem("user", JSON.stringify(result.foundUser));
        authDispatch({ type: "DO_LOGIN", payload: result.foundUser });
        onLogin();
      })
      .catch((err) => {
        console.log({ err });
      });
  }, initialState);

  const onLogin = () => {
    if (state && state.from) {
      navigate(state.from.pathname, { replace: true });
    } else {
      navigate("/products");
    }
  };

  return (
    <Wrapper>
      <StyledForm
        action="#"
        className="flex-column flex-gap"
        onSubmit={onSubmit}
      >
        <Typography variant="h1" className="text-center secondary">
          {/* Sign In To Your Account */}
        </Typography>
        <Input
          placeholder="Enter username"
          className="my-2"
          name="username"
          onChange={onChange}
        >
          <label>username</label>
        </Input>
        <InputPassword
          placeholder="Enter password"
          className="my-2"
          name="password"
          onChange={onChange}
          label="Password"
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="my-1"
        >
          <Button color="primary">
            Sign In <i className="fas fa-chevron-right"></i>
          </Button>
        </Box>
      </StyledForm>
    </Wrapper>
  );
}
