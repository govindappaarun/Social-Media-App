import React from "react";
import { Box, Button } from "src/components";
import { LinkButton } from "src/components/Button";
import { Wrapper } from "./sidebar.styled";
import { CgFeed } from "react-icons/cg";
import { RiBookMarkLine, RiProfileLine } from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa";

export function SideBarLeft({ ...rest }) {
  const isActiveLink = ({ isActive }) => (isActive ? "active" : "");
  return (
    <Wrapper>
      <Box direction="column" display="flex" className="links">
        <LinkButton className={isActiveLink} color="primary" to="feed">
          <CgFeed /> Feed
        </LinkButton>
        <LinkButton className={isActiveLink} color="primary" to="bookmarks">
          <RiBookMarkLine /> Bookmarks
        </LinkButton>
        <LinkButton className={isActiveLink} color="primary" to="profile/me">
          <RiProfileLine /> Profile
        </LinkButton>
      </Box>
      <Box className="links">
        <LinkButton className={isActiveLink} to="explore" color="primary">
          <FaInternetExplorer size={45} /> Explore
        </LinkButton>
        <LinkButton className={isActiveLink} to="createPost" color="success">
          <MdOutlinePostAdd size={45} /> Add a Post
        </LinkButton>
      </Box>
    </Wrapper>
  );
}

export function SideBarRight({ children, ...rest }) {
  return <Wrapper>{children}</Wrapper>;
}
