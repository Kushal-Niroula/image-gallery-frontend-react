const toggleAuthentication=(isLogged)=>{
  return({
  type:'toggleAuthentication',
  payload:{
    isLogged:isLogged
  }

})
}

export default toggleAuthentication;
