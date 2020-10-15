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


export const AgencyUser = createContext();

function App() {
   
  const [loginUser , setLoginUser] = useState();

    return (

      <AgencyUser.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>

          <Route path="/">
            <Home></Home>
          </Route>
           
           <Route path="/">
             <Login></Login>
           </Route>


          <Route exact path="/">
            <Home></Home>
          </Route>
       
        </Switch>
      </Router>
     </AgencyUser.Provider>

    );
}

export default App;
