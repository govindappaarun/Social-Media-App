import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "src/components";
import { PostCard } from "src/components/Card";
import { Wrapper } from "./Bookmarks.styled";

export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.users.bookmarks);

  return (
    <Wrapper display="flex" direction="column" gap="md">
      <Typography variant="h2">
        {bookmarks.length === 0 && "No"} Bookmarks
      </Typography>

      {bookmarks.map((bookmark) => (
        <PostCard post={bookmark} key={bookmark._id} />
      ))}
    </Wrapper>
  );
}
