import React from "react";
import Avatar from "../Avatar/Avatar";
import Box from "../Box";
import Image from "../Image";
import Typography from "../Typography";
import StyledWrapper, { Header, Footer, Main, Icon } from "./PostCard.styled";

import {
  RiEyeLine,
  RiHeart2Line,
  RiShareCircleLine,
  RiMessage2Line,
  RiBookMarkLine,
} from "react-icons/ri";

export default function ({ post, ...rest }) {
  const { mediaUrl, username, createdAt } = post;
  return (
    <StyledWrapper {...rest}>
      <Header>
        <Box display="flex" alignItems="center" gap="sm">
          <Avatar size="sm" type="span" text="AG"></Avatar>
          <Box>
            <Typography variant="span" as="span">
              {username}
            </Typography>
            <Typography variant="span">Published {createdAt}</Typography>
          </Box>
        </Box>
      </Header>
      <Main>
        <Image src={mediaUrl} alt="profile" />
      </Main>
      <Footer display="flex" gap="md">
        <Icon>
          <RiEyeLine />
        </Icon>
        <Icon>
          <RiHeart2Line />
        </Icon>
        <Icon>
          <RiShareCircleLine />
        </Icon>
        <Icon>
          <RiMessage2Line />
        </Icon>
        <Icon>
          <RiBookMarkLine />
        </Icon>
      </Footer>
    </StyledWrapper>
  );
}
