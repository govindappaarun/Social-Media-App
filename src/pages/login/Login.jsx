import React, { useEffect } from "react";
import { Wrapper, StyledForm } from "./Login.styled";
import { Input, Button, Box, Typography } from "src/components";
import { useForm } from "src/hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts";
import authService from "src/services/authService";
import { InputPassword } from "src/components/Input";
import Header from "../home/components/header";
import Footer from "../home/components/footer";

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
    doLoginApi(values);
  }, initialState);

  const doGuestLogin = () => {
    doLoginApi({ username: "vl-guest@gmail.com", password: "guest123" });
  };

  const doLoginApi = (values) => {
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
  };

  const onLogin = () => {
    if (state && state.from) {
      navigate(state.from.pathname, { replace: true });
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <StyledForm
          action="#"
          className="flex-column flex-gap"
          onSubmit={onSubmit}
        >
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
          <Box display="flex" gap="md" direction="column">
            <Button
              color="primary"
              style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              Sign In
            </Button>

            <Button
              color="success"
              outline
              type="button"
              onClick={doGuestLogin}
              style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              Guest Sign In
            </Button>
          </Box>
        </StyledForm>
      </Wrapper>
      <Footer />
    </>
  );
}
