import axios from "axios";

async function apiCloudinary(file) {
  const api = "https://api.cloudinary.com/v1_1/db9adijl0/image/upload";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "docs_upload_example_us_preset");
  const result = await axios.post(api, formData);
  return result;
}

export default apiCloudinary;
