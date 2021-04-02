import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import './Login.css'
import { Button, Container } from 'react-bootstrap';

// firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); // if already initialized, use that one
  }
const Login = () => {
    const [user, setUser] = useState({});

    let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
    const [signInUser, setSignInUser] = useContext(UserContext);

    var provider = new firebase.auth.GoogleAuthProvider();
  
    //Google function
    const handleGoogleSignIn = () => {
      
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          var user = result.user;
          console.log(user);
          // setUser(user);
          setSignInUser(user);
        history.replace(from);
        }).catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    const {email} = user;
    return (
        <Container >
           <div className="App mt-5 admin-form">
           {/* <button onClick = {handleGoogleSignIn} > Sign in with google </button> */}
           <Button variant="success" onClick={handleGoogleSignIn}>Logga in med google </Button>{' '} 
            <p>E-post: {email}</p>
           </div>
        </Container>
    );
};

export default Login;