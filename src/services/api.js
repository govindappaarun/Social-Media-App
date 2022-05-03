import axios from "axios";

axios.interceptors.request.use((config) => {
  if (config.url.indexOf("cloudinary") < 0) {
    config.headers.authorization = localStorage.getItem("token");
  }
  return config;
});

export default axios;
