import { useSelector } from "react-redux";

export const usePost = (postId) => {
  const posts = useSelector((state) => state.userFeed?.posts || []);
  return posts.find((post) => post._id === postId) || null;
};
