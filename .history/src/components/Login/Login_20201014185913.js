import React from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { continueWithGoogle, initializeLoginFramework } from './LoginManager';
import { Link, useHistory, useLocation } from 'react-router-dom';
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
        <div className="volunteer-login">
            <div className='login-page'>
                 <h2 className='login-with'>Login With</h2>
                 <div className="google" role='button' onClick={googleSignIn}><span className='continue-google'>Continue with Google</span></div>
                 <p className='account'>Don’t have an account? <Link>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;