import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, NavBar } from "src/components";
import { getAllUsers, getBookmarks } from "src/redux/reducers/usersSlice";
import Users from "../users";
import Footer from "./components/footer";
import Header from "./components/header";
import { SideBarLeft, SideBarRight } from "./components/sidebar";
import { Main, Wrapper } from "./Home.styled";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookmarks());
    dispatch(getAllUsers());
  }, []);

  return (
    <>
      <Wrapper>
        <Header className="header" />
        <Box display="flex" gap="md" className="container">
          <SideBarLeft />
          <Main>
            <Outlet />
          </Main>
          <SideBarRight>
            <Users />
          </SideBarRight>
        </Box>
        <Footer />
      </Wrapper>
    </>
  );
}
