//import app from 'firebase/app';
//import 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA4hIqLYzmOJE4ZcZ7N3I1LO9CkozJ2kr0",
  authDomain: "arda-twitter.firebaseapp.com",
  databaseURL: "https://arda-twitter.firebaseio.com", //https://arda-twitter-default-rtdb.europe-west1.firebasedatabase.app
  projectId: "arda-twitter",
  storageBucket: "arda-twitter.appspot.com",
  messagingSenderId: "6702542527",
  appId: "1:6702542527:web:b0334bd11dfb96a358600a",
  measurementId: "G-31LD0WNXZC",
};


var username = window.document.getElementById("uname").value;
var password = window.document.getElementById("password").value;
var database = window.firebase.database();

function writeUserData(username,password) {
  firebase.database().ref('users/' + userId).set({
    username: username,
    password: password,
  });
}

database.initializeApp(firebaseConfig);
writeUserData(username,password);
console.log("deneme");
console.log(username,password);