import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const [user, setUser]=useState('');
// const [email, setEmail]=useState('');
// const [password, setPassword]=useState('');
// const [emailError, setEmailError]=useState('');
// const [passwordError, setPasswordError]=useState('');
// const [hasAccount, setHasAccount]=useState(false);


// const handleLogin=()=>{
//   fire
//   .auth()
//   .signInWithEmailAndPassword(email,password)
//   .catch(err=> {
//     switch(err.code){
// case "auth/invalid":
// case "auth/user-disabled":
// case "auth/user":
// setEmailError(err.message);
// break
// case "auth/wrong password":
// setPasswordError(err.message);
// break;
//     }
//   })
// };
//   const handleSignUp=()=>{
//     fire
//     .auth()
//     .createUsernWithEmailAndPassword(email,password)
//     .catch(err=> {
//       switch(err.code){
// case "auth/email-already-exists":
// case "auth/invalid-email":
// // case "auth/user":
// setEmailError(err.message);
// break
// case "auth/weak-password":
//   setPasswordError(err.message);
//   break;
//       }
//     })

//   }
//   const handleLogout=()=>{
//     fire.auth().signOut();
//   }
//   const authListener=()=>{
    
//   }