import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';


export const agencyUser = createContext();

function App() {
   
  const [loginUser , setLoginUser] = useState();

    return (

      <agencyUser.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>

          <Route path="/">
            <Home></Home>
          </Route>
          
          <Route path="/login">
             <Login></Login>
          </Route>
          
          <Route exact path="/">
            <Home></Home>
          </Route>
       
        </Switch>
      </Router>
     </agencyUser.Provider>

    );
}

export default App;
