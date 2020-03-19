import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyBknSNrG_yR7FLMVJ01svDWlYte6GFvoL0",
    authDomain: "safetogo-271515.firebaseapp.com",
    databaseURL: "https://safetogo-271515.firebaseio.com",
    projectId: "safetogo-271515",
    storageBucket: "safetogo-271515.appspot.com",
    messagingSenderId: "468040312422",
    appId: "1:468040312422:web:4bba6be9a62e2a4442afa7"
  };
  // Initialize Firebase
let app = null
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

export const db = app.database()