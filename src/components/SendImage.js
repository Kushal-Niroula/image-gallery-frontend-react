import React, { useState } from "react";
import axios from "axios";
import {BASE_URL} from "../env.js";

/*
sends image uploaded to the backend
*/
function SendImage() {
  const [selectfile, setFile] = useState("");
  const [message,setMessage]=useState("");
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectfile){
      const formData = new FormData();
      formData.append("file", selectfile);
      axios.post(BASE_URL + "create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response)=>{
        if(response.data.status="failed"){
          setMessage("not an image file");
        }
      })
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} className="form-control browse" />
      {message}
      <button onClick={handleUpload} className="btn btn-success upload">
        {" "}
        upload{" "}
      </button>
    </div>
  );
}
export default SendImage;
