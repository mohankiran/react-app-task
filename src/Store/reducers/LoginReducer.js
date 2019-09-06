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
        return {
           ... state, 
           [action.name] : action.value,
           usernameRequired: false,
           pwdRequired: false
        } 
        default:
            return state
            
   }
   
}
export default reducer;