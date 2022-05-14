import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, NavBar } from "src/components";
import { LinkButton } from "src/components/Button";
import { getAllUsers, getBookmarks } from "src/redux/reducers/usersSlice";
import Users from "../users";
import { Main, SideBar, Wrapper } from "./Home.styled";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookmarks());
    dispatch(getAllUsers());
  }, []);

  return (
    <Wrapper>
      <NavBar></NavBar>
      <Box display="flex" gap="md" className="container">
        <SideBar className="left">
          <Box direction="column" display="flex">
            <LinkButton color="primary" to="feed">
              Feed
            </LinkButton>
            <LinkButton color="primary" to="bookmarks">
              Bookmarks
            </LinkButton>
            <LinkButton color="primary" to="profile/me">
              Profile
            </LinkButton>
          </Box>
        </SideBar>
        <Main>
          <Outlet />
        </Main>
        <SideBar className="right">
          <Users />
        </SideBar>
      </Box>
    </Wrapper>
  );
}
