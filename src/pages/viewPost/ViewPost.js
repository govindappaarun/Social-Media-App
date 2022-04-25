import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "src/components";
import CommentCard from "src/components/Card/CommentCard";
import PostCard from "src/components/Card/PostCard";
import CommentBox from "src/components/CommentBox";
import PostsService from "src/services/postsService";

export default function ViewPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId) {
      PostsService.getPost({ postId }).then((response) => {
        setPost(response.post);
      });
    }
  }, [postId]);

  const onPostAComment = (comment) => {
    PostsService.createComment(postId, {
      commentData: { content: comment },
    }).then((response) => console.log({ response }));
  };

  const onLikeAPost = () => {
    PostsService.likeAPost(postId).then((response) => {
      console.log("liked");
    });
  };

  const onDisLikeAPost = () => {
    PostsService.disLikeAPost(postId).then((response) => {
      console.log("disliked");
    });
  };

  return (
    <div>
      <Typography variant="h2">Viewing Post</Typography>
      {post && (
        <PostCard post={post} doLike={onLikeAPost} doDisLike={onDisLikeAPost} />
      )}
      <Typography>Comments</Typography>
      {post?.comments?.length}
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
