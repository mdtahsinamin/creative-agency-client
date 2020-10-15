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
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/Dashboard/AddService/AddService';
import Review from './components/Dashboard/Dashboard/Review/Review';
import MakeAdmin from './components/Dashboard/Dashboard/MakeAdmin/MakeAdmin';
import ServiceList from './components/Dashboard/Dashboard/ServiceList/ServiceList';


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
           
           <Route path="/login">
             <div>
               <ExtraAppBar side={false}></ExtraAppBar>
               <Login></Login>
             </div>
           </Route>

           <Route path="/dashboard">
              <Dashboard></Dashboard>
           </Route>

           <Route path="/addService">
             <AddService></AddService>
           </Route>

           <Route path="/review">
             <Review></Review>
           </Route>

           <Route path='makeAdmin'>
             <MakeAdmin></MakeAdmin>
           </Route>

           <Route path='/serviceList'>
              <ServiceList></ServiceList>
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
