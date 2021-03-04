

const Initial_State = {
  isLogged:false
};

const reducer = (state =  Initial_State , action)=>{
  switch(action.type){
    case 'toggleAuthentication':
      return({
        ...state, isLogged:action.payload.isLogged
      });

      default:
       return state;
  }
}

export default reducer;
