import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import toggleAuthentication from "../actions/toggleAuthentication.js";
import { Link } from "react-router-dom";
import {BASE_URL} from "../env.js";


/*
 login form at start screen
 checks login credentials on submission
 */
function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleClick() {
    if (username && password) {
      axios
        .post(BASE_URL + "login", { username: username, password: password })
        .then((response) => {
          if (response.data.logged === "success") {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username",response.data.username)
            props.toggleAuthentication(true);
            setUsername("");
            setPassword("");
          } else {
            setUsername("");
            setPassword("");
          }
        });
    }
  }
  return (
    <div className = "center">

      <input value={username} onChange={handleUsername} type = "text" placeholder="username" className="form-control username"/>

      <br />

      <input value={password} onChange={handlePassword} type = "password" placeholder="password" className="form-control password"/>
      <br />
      <div className="login-button">
      <button onClick={handleClick} className="btn btn-outline-primary login">login </button>
      </div>
      <br />
      <Link to="/register">
        <li> register </li>
      </Link>
    </div>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
