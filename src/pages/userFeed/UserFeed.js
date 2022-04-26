import { useEffect, useMemo, useState } from "react";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "src/components";
import { LinkButton } from "src/components/Button";
import { PostCard } from "src/components/Card";
import { getAllPosts } from "src/redux/reducers/postsSlice";
import {
  sortByDate,
  sortByTrending,
  sortByRecent,
} from "src/redux/reducers/postsSlice";

export default function UserFeed() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.userFeed.sortOrder);
  const sortedFeed = useSelector((state) => state.userFeed.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const viewPost = ({ _id }) => {
    navigate(`/home/viewPost/${_id}`);
  };

  const onSortBy = (type) => {
    switch (type) {
      case "date":
        dispatch(sortByDate(sortOrder === "asc" ? "desc" : "asc"));
        break;
      case "trending":
        dispatch(sortByTrending());
        break;
      case "recent":
        dispatch(sortByRecent());
      default:
    }
  };

  return (
    <div>
      <Typography variant="h2">UserFeed</Typography>
      <div>
        <Box display="flex">
          <LinkButton
            to={`/home/feed/date`}
            color="warning"
            onClick={() => onSortBy("date")}
          >
            {sortOrder === "asc" && <RiSortAsc />}
            {sortOrder === "desc" && <RiSortDesc />}
            Sort by Date
          </LinkButton>
          <LinkButton
            to={`/home/feed/trending`}
            onClick={() => onSortBy("trending")}
            color="error"
          >
            Trending
          </LinkButton>
          <LinkButton
            to={`/home/feed/recent`}
            onClick={() => onSortBy("recent")}
            color="secondary"
          >
            Recent
          </LinkButton>
        </Box>
        {sortedFeed &&
          sortedFeed.map((post, index) => (
            <PostCard post={post} key={index} onClick={() => viewPost(post)} />
          ))}
      </div>
    </div>
  );
}
