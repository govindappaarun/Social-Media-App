import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "src/components";
import CommentCard from "src/components/Card/CommentCard";
import PostCard from "src/components/Card/PostCard";
import CommentBox from "src/components/CommentBox";
import { usePost } from "src/redux";
import {
  disLikeAPost,
  likeAPost,
  postAComment,
} from "src/redux/reducers/postsSlice";
import { doBookmark, doRemoveBookmark } from "src/redux/reducers/usersSlice";
import PostsService from "src/services/postsService";
import { Wrapper } from "./ViewPost.styled";

export default function ViewPost() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.users.bookmarks);
  const post = usePost(postId);
  const users = useSelector((state) => state.users.users);

  const onPostAComment = (comment) => {
    dispatch(postAComment({ postId, comment }));
  };

  const onLikeAPost = () => {
    dispatch(likeAPost(postId));
  };

  const onDisLikeAPost = () => {
    dispatch(disLikeAPost(postId));
  };

  const onBookmarkAPost = () => {
    dispatch(doBookmark(postId));
  };

  const onRemoveBookmark = () => {
    dispatch(doRemoveBookmark(postId));
  };

  const isBookmarked = (postId) => {
    return bookmarks.some((bookmark) => bookmark._id === postId);
  };

  const getProfilePic = (username) => {
    let found = users.find((user) => user.username === username);
    return (found && found.avatar) || "/default-profile.jpg";
  };

  const navigateToProfile = (e, username) => {
    e.stopPropagation();
    navigate(`/home/profile/${username}`);
  };

  return (
    <Wrapper display="flex" direction="column" alignItems="start" gap="md">
      {post && (
        <PostCard
          post={post}
          doLike={onLikeAPost}
          doDisLike={onDisLikeAPost}
          doBookmark={onBookmarkAPost}
          doRemoveBookmark={onRemoveBookmark}
          isBookmarked={isBookmarked}
          className="view-card"
        />
      )}
      <Typography variant="h2">Comments</Typography>
      {post &&
        post.comments.map((comment, index) => (
          <CommentCard
            getProfilePic={getProfilePic}
            navigateToProfile={navigateToProfile}
            comment={comment}
            key={index}
          />
        ))}
      {post && post.comments.length === 0 && (
        <Typography>No comments found</Typography>
      )}
      <CommentBox
        getProfilePic={getProfilePic}
        navigateToProfile={navigateToProfile}
        onSave={onPostAComment}
      />
    </Wrapper>
  );
}
