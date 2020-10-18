import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { AgencyUser } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
     
    const [loginUser , setLoginUser] = useContext(AgencyUser);
    
    

    const isLoggedIn = () =>{
       const token = sessionStorage.getItem('token');
       if(!token){
        return false;
      }
      const decodedToken = jwt_decode(token);
      
      const currentTime = new Date().getTime() / 1000;

      return (decodedToken.exp > currentTime);
    }
   
    const token = sessionStorage.getItem('token');
    if(token) {
      const decodedToken = jwt_decode(token);
      
      loginUser.currentName = decodedToken.name;
      loginUser.currentEmail = decodedToken.email;
      loginUser.currentPhotoUrl = decodedToken.picture;
      setLoginUser(loginUser);

    }
  
  

    return (
        <Route
        {...rest}
        render={({ location }) =>
          (loginUser.email ||isLoggedIn())? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
   
};

export default PrivateRoute;