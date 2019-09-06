import axios from 'axios';

export const changeHandler = 'CHANGEHANDLER';
export const getDetails = 'GET_DETAILS';



export const getInputVal = (value) => {
    return {
        type:changeHandler,
        name: value.name,
        value: value.value
    }
}
export const getResult = (comments) => {
    return {
        type: getDetails,
        payload: comments   
    }
}


export const getValues = (event) => {
    return dispatch => {
      axios.get("../../data.json").then(res => {
          setTimeout(() => {
              console.log("res--->",res.data)
            dispatch(getResult(res.data));
          }, 1500);
        })
        .catch(err => {
          //dispatch(addTodoFailure(err.message));
          console.log("err--->",err)
        });
    };
  };