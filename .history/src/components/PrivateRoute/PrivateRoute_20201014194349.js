import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { AgencyUser } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
     
    const [loginUser , setLoginUser] = useContext(AgencyUser);

    const isLoggedIN = () =>{
       const token = sessionStorage.getItem('token');

       if(!token){
        return false;
      }

      const decodedToken = jwt_decode(token);
      
      console(decodedToken);
      

      const currentTime = new Date().getTime() / 1000;

      return (decodedToken.exp > currentTime);
    }
   
    console.log(isLoggedIN());


    return (
        <Route
        {...rest}
        render={({ location }) =>
         false? (
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