import Api from "./api";

const UserService = {
  getAllUsers: async () => {
    try {
      const response = await Api.get("/api/users");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getUser: async (userId) => {
    try {
      const response = await Api.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  followUser: async (followUserId) => {
    try {
      const response = await Api.post(`/api/users/follow/${followUserId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  unfollowUser: async (followedUserId) => {
    try {
      const response = await Api.post(`/api/users/unfollow/${followedUserId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
