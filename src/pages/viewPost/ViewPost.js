import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography } from "src/components";
import CommentCard from "src/components/Card/CommentCard";
import PostCard from "src/components/Card/PostCard";
import CommentBox from "src/components/CommentBox";
import { usePost } from "src/redux";
import { disLikeAPost, likeAPost } from "src/redux/reducers/postsSlice";
import { doBookmark, doRemoveBookmark } from "src/redux/reducers/usersSlice";
import PostsService from "src/services/postsService";

export default function ViewPost() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.users.bookmarks);
  const post = usePost(postId);

  const onPostAComment = (comment) => {
    PostsService.createComment(postId, {
      commentData: { content: comment },
    }).then((response) => console.log({ response }));
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

  return (
    <div>
      <Typography variant="h2">Viewing Post</Typography>
      {post && (
        <PostCard
          post={post}
          doLike={onLikeAPost}
          doDisLike={onDisLikeAPost}
          doBookmark={onBookmarkAPost}
          doRemoveBookmark={onRemoveBookmark}
          isBookmarked={isBookmarked}
        />
      )}
      <Typography>Comments</Typography>
      {post &&
        post.comments.map((comment, index) => (
          <CommentCard comment={comment} key={index} />
        ))}
      {post && post.comments.length === 0 && (
        <Typography>No comments found</Typography>
      )}
      <CommentBox onSave={onPostAComment} />
    </div>
  );
}
