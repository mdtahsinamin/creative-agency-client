import React from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { continueWithGoogle, initializeLoginFramework } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AgencyUser } from '../../App';

initializeLoginFramework();


const Login = () => {

    const [loginUser , setLoginUser] = useContext(AgencyUser)

  
    const history = useHistory();

    const location = useLocation();

     let { from } = location.state || { from: { pathname: "/" } };

     const googleSignIn = () =>{
      
        continueWithGoogle().then(res=>{
            const login = {...volunteers,...res};
            setLoginUser(login);
            storeAuthToken();
            history.replace(from);
        })
    }
   
    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then((idToken)=>{
              sessionStorage.setItem('token',idToken);
          }).catch((error)=>{
            
          });
    }

  

    return (
         <div>

         </div>
    );
};

export default Login;