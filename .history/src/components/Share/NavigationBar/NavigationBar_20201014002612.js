import React from 'react';
import { Link } from 'react-router-dom';
import agencyLogo from '../../../images/logos/logo.png';
import './NavigationBar.css';
const NavigationBar = () => {
    return (
       <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light ">
             <div>
                <Link to='/' className="navbar-brand"><img className="agencyLogo" src={agencyLogo} alt=""/></Link>
             </div>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                <li className="nav-item mr-5">
                    <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item mr-5">
                    <Link className="nav-link" to="/portfolios">Our Portfolio</Link>
                </li>

                <li className="nav-item mr-5">
                    <Link className="nav-link" to="/ourTeam">Our Team</Link>
                </li>
                <li className="nav-item mr-5">
                    <Link className="nav-link" to="/contactUs">Contact Us</Link>
                </li>
                <li className="nav-item mr-5">
                    <Link to='/login'><button className='login-btn'>Login</button></Link>
                </li>

                </ul>
                
            </div>
         </nav>
       </div>
    );
};

export default NavigationBar;