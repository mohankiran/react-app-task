const intialState = {
    emailId: '',
    password:'',
    usernameRequired: false,
    pwdRequired: false,
    comments: []
}
const reducer = (state = intialState, action) => {
   switch(action.type) {
    case 'CHANGEHANDLER': 
    console.log("state--->",state)
        return {
           ... state, 
           [action.name] : action.value
        } 
        default:
            return state
            
   }
   
}
export default reducer;