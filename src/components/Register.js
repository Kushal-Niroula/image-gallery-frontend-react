import React, {useState}from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {BASE_URL} from "../env.js"


/*
  Registration form for new users
*/
function Register(){
  const[username,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const[message,setMessage] = useState('');

  const handleInput = (e)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  const handleRegister = ()=>{
    if(username && password){
      axios.post(BASE_URL +"register",{username:username,password:password})
      .then((response)=>{
        setUsername("");
        setPassword("");
        if(response.data.status ==="success"){
          setMessage("user registered")
        }
        else if(response.data.status == "failed"){
          setMessage("username taken")
        }
        else{
          setMessage("error occured")
        }


      })
    }
    else{
      setUsername("");
      setPassword("");
      setMessage("please enter both username and password")
    }

  }

  return(
    <div className="center">
   <input value ={username} onChange={handleInput} placeholder="username" type="text" className="form-control username"/>
    <br />
    <input value = {password} onChange={handlePassword} placeholder="password" type="password" className="form-control password"/>
    <br />
    <button onClick={handleRegister} className="btn btn-outline-primary login">register</button>
    <p>{message}</p>
    <Link to="/">
    <li> back to login </li>
    </Link>

    </div>
  )
}


export default Register;
