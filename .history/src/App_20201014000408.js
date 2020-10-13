import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
           <Home></Home>
        </Route>
        <Route exact path="/">
           <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}
/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,320L1440,128L1440,320L0,320Z"></path>
</svg>
*/ 
export default App;
