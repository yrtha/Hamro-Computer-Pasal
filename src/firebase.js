// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCutQunTIvBhiT1L9HUHTik42e7jJyvZR4",
    authDomain: "pc-hardware-shop.firebaseapp.com",
    databaseURL: "https://pc-hardware-shop.firebaseio.com",
    projectId: "pc-hardware-shop",
    storageBucket: "pc-hardware-shop.appspot.com",
    messagingSenderId: "318512980119",
    appId: "1:318512980119:web:47242c3704f103bf7209d2",
    measurementId: "G-VDVCD3N84R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };