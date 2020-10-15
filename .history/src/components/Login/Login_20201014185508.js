import React from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { initializeLoginFramework } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AgencyUser } from '../../App';

initializeLoginFramework();


const Login = () => {

    const [loginUser , setLoginUser] = useContext(AgencyUser)

  
    const history = useHistory();

    const location = useLocation();



  

    return (
         
    );
};

export default Login;