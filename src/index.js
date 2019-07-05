import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style';
import App from './App';
import rootReducer from './store/reducers/rootReducer'
import fbConfig from './store/config/fbConfig'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { reduxFirestore , getFirestore } from 'redux-firestore'
import { reactReduxFirebase , getFirebase } from 'react-redux-firebase'

const store = createStore(rootReducer, 
     compose (
          applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
          reduxFirestore(fbConfig),
          reactReduxFirebase(fbConfig, {attachAuthIsReady: true , useFirestoreForProfile: true, userProfile: 'users'})
     )
);

store.firebaseAuthIsReady.then(() => {
     ReactDOM.render( <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
})
