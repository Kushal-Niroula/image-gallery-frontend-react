import React from 'react';
/*
  logs out by clearing the token and reloading
*/
function Logout(){

  const handleLogout = ()=>{
    localStorage.clear();
    window.location.reload(false);
  }
return(
  <button onClick={handleLogout} className="btn btn-danger logout">
    Logout {localStorage.getItem("username")}
  </button>
)
}
export default Logout
