import axios from "axios";

async function apiCloudinary(file) {
  const formdata = new FormData();

  formdata.append("file", file);
  formdata.append("cloud_name", "db9adijl0");
  formdata.append("upload_preset", "vzzc5qwt");

  let res = await fetch(
    "https://api.cloudinary.com/v1_1/db9adijl0/image/upload",
    {
      method: "post",
      mode: "cors",
      body: formdata,
    }
  );
  let json = await res.json();
  return json.secure_url;
}

export default apiCloudinary;
