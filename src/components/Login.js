import React, { useEffect} from "react";
import axios from "axios";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import ViewImages from "./ViewImages";
import {BASE_URL} from "../env.js";
import toggleAuthentication from "../actions/toggleAuthentication";

/**
*@param {props} object
*checks if user is logged in based on localStorage
*@return {LoginForm} if not logged in
*else
*@return {ViewImages}
*/
function Login(props) {

  useEffect(() => {
    axios({
      url: BASE_URL,
      method: "get",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    }).then((response) => {
      if (response.data.isLogged != props.isLogged) {
        localStorage.setItem("username",response.data.username);
        props.toggleAuthentication(response.data.isLogged);
      }
    });
  });
  return (<div>{props.isLogged ? <ViewImages/> : <LoginForm />}</div>);
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleAuthentication: (isLogged) =>
      dispatch(toggleAuthentication(isLogged)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
