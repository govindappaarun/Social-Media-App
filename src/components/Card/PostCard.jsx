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
  doBookmark = () => {},
  doRemoveBookmark = () => {},
  isBookmarked = () => {},
  ...rest
}) {
  const { authState } = useAuth();

  const { mediaUrl, username, createdAt, likes, _id } = post;

  const isLikedByMe = () =>
    likes.likeCount &&
    likes.likedBy.some((user) => user.username === authState.user.username);

  const isDislikedByMe = () =>
    likes.dislikedBy.some((user) => user.username === authState.user.username);

  const haveBookmarked = isBookmarked(_id);
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
          <sub>
            <small>{likes.likeCount > 0 ? likes.likeCount : ""}</small>
          </sub>
        </Icon>
        <Icon onClick={doDisLike}>
          <RiDislikeLine className={clsx({ active: isDislikedByMe() })} />
        </Icon>
        <Icon>
          <RiMessage2Line />
        </Icon>
        <Icon onClick={haveBookmarked ? doRemoveBookmark : doBookmark}>
          <RiBookMarkLine className={clsx({ active: haveBookmarked })} />
        </Icon>
      </Footer>
    </StyledWrapper>
  );
}
