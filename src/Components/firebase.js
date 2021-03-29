import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsAhPmphTdqZQ-D7CcE-jIl_iwVbhxrb4",
    authDomain: "projectminiweb-ce474.firebaseapp.com",
    projectId: "projectminiweb-ce474",
    storageBucket: "projectminiweb-ce474.appspot.com",
    messagingSenderId: "323033980228",
    appId: "1:323033980228:web:6a76843072121d75b58b11",
    measurementId: "G-2T1NSG2BX6"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();