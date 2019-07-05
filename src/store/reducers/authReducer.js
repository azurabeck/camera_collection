const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {

    switch(action.type) {
        case 'SIGN_IN_ERROR': 
            return {
                ...state, authError: action.err.message
            }
        case 'SIGN_IN_SUCCESS':
            return {
                ...state, authError: null
            }
        case 'SIGN_OUT_SUCCESS':
            return state;
        
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                authError: null
            }  
     
        default:            
            return state
    }
}

export default authReducer