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

  getPost: async ({ postId }) => {
    try {
      const response = await Api.get(`/api/posts/${postId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getMyPosts: async (username) => {
    try {
      const response = await Api.get(`/api/posts/user/${username}`);
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

  editPost: async (post) => {
    try {
      const response = await Api.post(`/api/posts/edit/${post._id}`, {
        ...post,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deletePost: async (postId) => {
    try {
      const response = await Api.delete(`/api/posts/${postId}`);
      console.log({ response });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createComment: async (postId, comment) => {
    try {
      const response = await Api.post(`/api/posts/${postId}/comment`, {
        ...comment,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  likeAPost: async (postId) => {
    try {
      const response = await Api.post(`/api/posts/like/${postId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  disLikeAPost: async (postId) => {
    try {
      const response = await Api.post(`/api/posts/dislike/${postId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default PostsService;
