import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AgencyUser } from '../../../App';
import agencyLogo from '../../../images/logos/logo.png';
import './NavigationBar.css';
import jwt_decode from "jwt-decode";
import { Nav, Navbar } from 'react-bootstrap';
const NavigationBar = () => {
    
    const[loginUser , setLoginUser] = useContext(AgencyUser);

    const history = useHistory();

    const handleChange = ()=>{
     history.push('/login');
    }
   
    const handleLogoutUser = ()=>{
         setLoginUser({});
         sessionStorage.clear();
         setIsAdmin(false);
         history.push('/home');         
    }
    
    const [isAdmin ,setIsAdmin] = useState(false);
  
    
    useEffect(()=>{
        const loginUserEmail = loginUser.email || loginUser.currentEmail;

        fetch('http://localhost:5200/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({loginUserEmail})
        }).then(response => response.json())
        .then(data => setIsAdmin(data));
        
    },[])
    
    let currentName ='';
    let currentEmail=''
    
    if(!loginUser.email && sessionStorage.getItem('token')){
    const token = sessionStorage.getItem('token');
    if(token) {
      const decodedToken = jwt_decode(token);
        currentName = decodedToken.name;
        currentEmail = decodedToken.email;
     }
   }
     
    return (
       <div className="container">
              <Navbar bg="" expand="lg">
               <Link to='/' className="navbar-brand"><img className="agencyLogo" src={agencyLogo} alt=""/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='mt-5 pt-3' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                      <Link className="nav-link mr-4 mt-3" to="/home">Home <span className="sr-only">(current)</span></Link>
                      <Link className="nav-link mr-4 mt-3" to="/portfolios">Our Portfolio</Link>
                      <Link className="nav-link mr-4 mt-3" to="/ourTeam">Our Team</Link>
                      <Link className="nav-link mr-4 mt-3" to="/contactUs">Contact Us</Link>
                      {isAdmin && <Link className="nav-link mr-4 mt-3" to="/serviceList">Admin Dashboard</Link>}
                      {!(loginUser.email||loginUser.currentEmail || currentEmail ) && <button onClick={handleChange} className='login-btn mr-4 mt-3'>Login</button>}
                       {(loginUser.email||loginUser.currentEmail||currentEmail )&& <button onClick={handleLogoutUser} className='login-btn mr-4 mt-3'>Logout</button>}
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
       </div>
    );
};

export default NavigationBar;




/*
<nav className="navbar navbar-expand-lg navbar-light ">
             
                
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                </button>

             <div className="collapse navbar-collapse mt-5 pt-3" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                <li className="nav-item mr-5">
                    
                </li>

                <li className="nav-item mr-5">
                   
                </li>

                <li className="nav-item mr-5">
                   
                </li>
                <li className="nav-item mr-5">
                    
                </li>

                { isAdmin && <li className="nav-item mr-5">
                    
                </li>
                }
                
                {!(loginUser.email||loginUser.currentEmail || currentEmail )&&<li className="nav-item mr-5">
                    <button onClick={handleChange} className='login-btn'>Login</button>
                </li>
                   
                }
                
                {
                (loginUser.email||loginUser.currentEmail||currentEmail )&&<li className="nav-item mr-5">
                    <button onClick={handleLogoutUser} className='login-btn'>Logout</button>
                </li>
                }
                </ul>
            </div>
         </nav>

*/