import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box } from "src/components";
import { PostCard } from "src/components/Card";
import { getAllPosts } from "src/redux/reducers/postsSlice";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function Explore() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.userFeed.posts);
  const bookmarks = useSelector((state) => state.users.bookmarks);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const isBookmarked = (postId) => {
    return bookmarks.some((bookmark) => bookmark._id === postId);
  };

  return (
    <Wrapper display="flex" direction="column" gap="md">
      <Box display="flex" wrap="wrap" gap="md">
        {feed &&
          feed.map((post, index) => (
            <PostCard post={post} key={index} isBookmarked={isBookmarked} />
          ))}
      </Box>
    </Wrapper>
  );
}
