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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ({
  post,
  doLike = () => {},
  doDisLike = () => {},
  doBookmark = () => {},
  doRemoveBookmark = () => {},
  isBookmarked = () => {},
  ...rest
}) {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const users = useSelector((state) => state.users.users);
  const { mediaUrl, username, createdAt, likes, comments, _id } = post;

  const isLikedByMe = () =>
    likes.likeCount &&
    likes.likedBy.some((user) => user.username === authState.user.username);

  const isDislikedByMe = () =>
    likes.dislikedBy.some((user) => user.username === authState.user.username);

  const haveBookmarked = isBookmarked(_id);

  const getProfilePic = (username) => {
    let found = users.find((user) => user.username === username);
    return (found && found.avatar) || "/default-profile.jpg";
  };

  const getUserFullName = (username) => {
    let found = users.find((user) => user.username === username);
    return found && `${found.firstName} ${found.lastName}`;
  };

  const navigateToProfile = (e) => {
    e.stopPropagation();
    navigate(`/home/profile/${username}`);
  };

  return (
    <StyledWrapper {...rest}>
      <Header>
        <Box display="flex" alignItems="center">
          <Image
            src={getProfilePic(username)}
            className="img-responsive img-round"
            onClick={navigateToProfile}
          />
          <Box>
            <Typography variant="h3">{getUserFullName(username)}</Typography>
            <Typography variant="span">
              Published: {new Date(createdAt).toDateString()}
            </Typography>
          </Box>
        </Box>
      </Header>
      <Main>
        <Image className="img-responsive" src={mediaUrl} alt="profile" />
      </Main>
      <Footer
        display="flex"
        gap="md"
        justifyContent="space-around"
        alignItems="center"
      >
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
          <sub>
            <small>{comments.length > 0 ? comments.length : ""}</small>
          </sub>
        </Icon>
        <Icon onClick={haveBookmarked ? doRemoveBookmark : doBookmark}>
          <RiBookMarkLine className={clsx({ active: haveBookmarked })} />
        </Icon>
      </Footer>
    </StyledWrapper>
  );
}
