import React from "react";
import axios from "axios";
import {BASE_URL} from "../env.js";

/* individual image div  displayed like a card*/
function ImageCard(props) {
  const handleDelete = () => {
    console.log(props.id);
    axios
      .post(BASE_URL + "delete", {
        id: props.id,
      })
      .then((response) => {});
  };
  const handleFull = () => {
    window.open(props.src);
  };
  return (
    <div>
      <img src={props.src} alt="user images" className = "images"/>
      <br />
      <button onClick={handleDelete} className="btn btn-danger delete"> Delete </button>
      <button onClick={handleFull} className="btn btn-info full"> View </button>
    </div>
  );
}
export default ImageCard;
