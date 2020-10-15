import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import ExtraAppBar from './components/Share/ExtraAppBar/ExtraAppBar';
import Login from './components/Login/Login';


export const AgencyUser = createContext();

function App() {
   
  const [loginUser , setLoginUser] = useState();

    return (

      <AgencyUser.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
           
           <Route path="/">
             <Login></Login>
           </Route>


          
       
        </Switch>
      </Router>
     </AgencyUser.Provider>

    );
}

export default App;
