import Avatar from "../Avatar/Avatar";
import Box from "../Box";
import Image from "../Image";
import Typography from "../Typography";
import StyledWrapper, { Header, Footer, Main, Icon } from "./PostCard.styled";

import {
  RiEyeLine,
  RiHeart2Line,
  RiMessage2Line,
  RiBookMarkLine,
  RiDislikeLine,
} from "react-icons/ri";
import { useAuth } from "src/contexts";
import clsx from "clsx";

export default function ({
  post,
  doLike = () => {},
  doDisLike = () => {},
  ...rest
}) {
  const { authState } = useAuth();

  const { mediaUrl, username, createdAt, likes } = post;

  const isLikedByMe = () =>
    likes.likeCount &&
    likes.likedBy.some((user) => user.username === authState.user.username);

  const isDislikedByMe = () =>
    likes.dislikedBy.some((user) => user.username === authState.user.username);

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
        <Icon onClick={doLike}>
          <RiHeart2Line className={clsx({ active: isLikedByMe() })} />
        </Icon>
        <Icon onClick={doDisLike}>
          <RiDislikeLine className={clsx({ active: isDislikedByMe() })} />
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
