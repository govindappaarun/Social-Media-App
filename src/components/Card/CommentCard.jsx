import Avatar from "../Avatar/Avatar";
import Box from "../Box";
import Image from "../Image";
import Typography from "../Typography";
import StyledWrapper from "./CommentCard.styled";

export default function CommentCard({
  comment,
  getProfilePic,
  navigateToProfile,
  ...rest
}) {
  const { content, username, createdAt } = comment;
  return (
    <StyledWrapper {...rest}>
      <Box display="flex" gap="lg">
        <Image
          src={getProfilePic(username)}
          className="img-responsive img-round avatar"
          onClick={(e) => navigateToProfile(e, username)}
        />
        <Box
          className="text-container"
          display="flex"
          shrink="1"
          direction="column"
          gap="sm"
        >
          <Box display="flex" alignItems="center" gap="sm">
            <Typography variant="span">{username}</Typography> |
            <Typography variant="span">{createdAt}</Typography>
          </Box>
          <Typography variant="span">{content}</Typography>
        </Box>
      </Box>
    </StyledWrapper>
  );
}
