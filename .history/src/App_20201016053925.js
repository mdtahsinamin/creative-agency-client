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
import Order from './components/Dashboard/Dashboard/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const AgencyUser = createContext();

function App() {
   
  const [loginUser , setLoginUser] = useState({
     
  });

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

           <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
           </PrivateRoute>
           <PrivateRoute path ='/order'>
             <Order></Order>
           </PrivateRoute>
           <PrivateRoute path="/addService">
             <AddService></AddService>
           </PrivateRoute>

           <PrivateRoute path="/review">
             <Review></Review>
           </PrivateRoute>

           <PrivateRoute path='/serviceList'>
              <ServiceList></ServiceList>
           </PrivateRoute>
          
           <PrivateRoute path='/makeAdmin'>
             <MakeAdmin></MakeAdmin>
           </PrivateRoute>



          <Route exact path="/">
            <Home></Home>
          </Route>
          
        </Switch>
      </Router>
     </AgencyUser.Provider>

    );
}

export default App;
