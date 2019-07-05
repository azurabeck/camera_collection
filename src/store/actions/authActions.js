
export const signInWithGoogle = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const provider = new firebase.auth.GoogleAuthProvider();
       
        firebase.auth().signInWithRedirect(provider)
        .then(() => {
            dispatch({type: 'SING_IN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'SING_IN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGN_OUT_SUCCESS'})
        }) 
    }
}