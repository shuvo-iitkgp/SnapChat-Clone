import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCwxOp80bFepSbYJcttp7K8efS4VNY-Ps0",
    authDomain: "snapchat-clone-pro.firebaseapp.com",
    projectId: "snapchat-clone-pro",
    storageBucket: "snapchat-clone-pro.appspot.com",
    messagingSenderId: "112941495459",
    appId: "1:112941495459:web:d4686ab4ee4cff716bfb16"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db  = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, storage, provider};
