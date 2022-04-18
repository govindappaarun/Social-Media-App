import { useEffect, useMemo, useState } from "react";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Box } from "src/components";
import { LinkButton } from "src/components/Button";
import { PostCard } from "src/components/Card";
import PostsService from "src/services/postsService";
import { useSortFeed } from "./hook";

export default function UserFeed() {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    PostsService.getPosts().then((response) => setPosts(response.posts));
  }, []);

  const sortedFeed = useSortFeed(posts, sortBy, sortOrder);

  const viewPost = ({ _id }) => {
    navigate(`/home/viewPost/${_id}`);
  };

  const onSortBy = (type) => {
    if (type === "date") {
      setSortBy("date");
      setSortOrder((order) => (order === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(type);
      setSortOrder(null);
    }
  };

  return (
    <div>
      <div>UserFeed</div>
      {/* add routes for sorting */}
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
