import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBzkPWudne_DcJb3uN0aDS10AWdC2KRCwk",
    authDomain: "camera-collection.firebaseapp.com",
    databaseURL: "https://camera-collection.firebaseio.com",
    projectId: "camera-collection",
    storageBucket: "",
    messagingSenderId: "949834010742",
    appId: "1:949834010742:web:e2bde687ea6febd9"
};
  
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;