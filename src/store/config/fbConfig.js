import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCWLvbrM29HLESaJLHMyz22SJ9OdmHEuf0",
    authDomain: "cameracollection-8a052.firebaseapp.com",
    databaseURL: "https://cameracollection-8a052.firebaseio.com",
    projectId: "cameracollection-8a052",
    storageBucket: "",
    messagingSenderId: "1087271557545",
    appId: "1:1087271557545:web:8d5790d09ba1e9ce"
};
  
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;