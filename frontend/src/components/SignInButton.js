// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyCZ9AeNf2LBCQuf0aKSni40wQN8kNV2-4M",
    authDomain: "proyecto-826a6.firebaseapp.com",
    projectId: "proyecto-826a6",
    storageBucket: "proyecto-826a6.appspot.com",
    messagingSenderId: "40543824575",
    appId: "1:40543824575:web:bf3c21901516f34a5ef40a"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (authResult) => {
        const objeto = {
            name: authResult.user.displayName,
            email: authResult.user.email,
            img: authResult.user.photoURL,
            id: authResult.user.uid,
            isNew: authResult.additionalUserInfo.isNewUser,
        }
        localStorage.setItem('session', JSON.stringify(objeto));
        return true;
    },
  },
};

function SignInButton() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default SignInButton
