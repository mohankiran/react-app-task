const initialState = {
    comments:[]
}
 const dashboardReducer = (state = initialState, action) => {
        switch (action.type) {
            case "GET_DETAILS":
                return {
                    ... state,
                    comments : state.comments.concat(action.payload)
                }
            default:
            return state
        }   
}   
 export default dashboardReducer;