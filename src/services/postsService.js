import Api from "./api";

const PostsService = {
  getPosts: async () => {
    try {
      const response = await Api.get("/api/posts");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createPost: async (post) => {
    try {
      const response = await Api.post("/api/posts", { ...post });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default PostsService;
