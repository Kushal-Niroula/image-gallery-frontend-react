import React, { useState, useEffect } from "react";
import axios from "axios";
import SendImage from "./SendImage.js";
import ImageCard from "./ImageCard";
import Logout from "./Logout.js";
import {BASE_URL} from "../env.js";

/*
gallery view of the application
*/
function ViewImages() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios({
      url: BASE_URL + "view",
      method: "get",
      headers: {
        authorization: localStorage.getItem("token"),
      }
    }).then((response) => {
      if(!response.data.status){
      setImages(response.data);
    }
    });
  });

  return (
    <div>
    <div className="view-head" >
    <Logout />
    <SendImage />
    </div>
    <div className = "view">
      {images.map((image) =>(



        <ImageCard
          key = {image.uuid}
          id={image.uuid}
          src={`${BASE_URL}${image.image}`}
        />

      ))}
    </div>
    </div>
  );
}
export default ViewImages;
