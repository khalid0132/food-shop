import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';

// firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); // if already initialized, use that one
  }
const Login = () => {
    const [user, setUser] = useState({});

    var provider = new firebase.auth.GoogleAuthProvider();
  
    //Google function
    const handleGoogleSignIn = () => {
        console.log('signeddddd')

    


      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          var user = result.user;
          console.log(user);
          setUser(user);
        }).catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    const {email} = user;
    return (
        <div className="App mt-5">
            <button onClick = {handleGoogleSignIn} > Sign in with google </button> 
            <p>E-mail: {email}</p>
        </div>
    );
};

export default Login;