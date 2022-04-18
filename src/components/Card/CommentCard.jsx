import Avatar from "../Avatar/Avatar";
import Box from "../Box";
import Typography from "../Typography";
import StyledWrapper from "./CommentCard.styled";
import { Icon } from "./PostCard.styled";
import { RiReplyLine } from "react-icons/ri";

export default function ({ comment }, ...rest) {
  const { message, username, time, avatarText } = comment;
  return (
    <StyledWrapper {...rest}>
      <Box display="flex" gap="lg">
        <Avatar size="sm" text={avatarText} type="span"></Avatar>
        <Box
          className="text-container"
          display="flex"
          shrink="1"
          direction="column"
          gap="sm"
        >
          <Box display="flex" alignItems="center" gap="sm">
            <Typography variant="span">{username}</Typography>
            <Typography variant="span">{time}</Typography>
            <Icon>
              <RiReplyLine />
            </Icon>
          </Box>
          <Typography variant="span">{message}</Typography>
        </Box>
      </Box>
    </StyledWrapper>
  );
}
