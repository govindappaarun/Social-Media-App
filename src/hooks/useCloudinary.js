import axios from "axios";

async function apiCloudinary(file) {
  const formdata = new FormData();
  const URL = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

  formdata.append("file", file);
  formdata.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
  formdata.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

  let res = await fetch(URL, {
    method: "post",
    mode: "cors",
    body: formdata,
  });
  let json = await res.json();
  return json.secure_url;
}

export default apiCloudinary;
