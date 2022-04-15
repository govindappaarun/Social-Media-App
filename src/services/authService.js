import Api from "./api";

const AuthService = {
  doLogin: async (login) => {
    try {
      const response = await Api.post("/api/auth/login", { ...login });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  doSignUp: async (signup) => {
    try {
      const response = await Api.post("/api/auth/signup", { ...signup });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;
