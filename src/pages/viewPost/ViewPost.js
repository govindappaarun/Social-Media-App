import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "src/components/Card/CommentCard";
import PostCard from "src/components/Card/PostCard";
import PostsService from "src/services/postsService";

export default function ViewPost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([
    {
      userName: "Arun Govindappa",
      avatarText: "AG",
      message: "lorem  adasdasasd",
      time: "2 days ago",
    },
  ]);
  useEffect(() => {
    if (postId) {
      PostsService.getPost({ postId }).then((response) => {
        setPost(response.post);
      });
    }
  }, [postId]);
  return (
    <div>
      <div>View Post {postId}</div>
      {post && <PostCard post={post} />}
      <CommentCard comment={comments[0]} />
      <CommentCard className="child" comment={comments[0]} />
    </div>
  );
}
