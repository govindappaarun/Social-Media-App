import { useEffect, useState } from "react";
import { PostCard } from "src/components/Card";
import PostsService from "src/services/postsService";

export default function UserFeed() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    PostsService.getPosts().then((response) => setPosts(response.posts));
  }, []);

  return (
    <div>
      <div>UserFeed</div>
      <div>
        {posts &&
          posts.map((post, index) => <PostCard post={post} key={index} />)}
      </div>
    </div>
  );
}
