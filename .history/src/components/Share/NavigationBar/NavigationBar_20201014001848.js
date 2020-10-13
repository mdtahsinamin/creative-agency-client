import React from 'react';
import agencyLogo from '../../../images/logos/logo.png';
import './NavigationBar.css';
const NavigationBar = () => {
    return (
       <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light ">
             <div>
                <a className="navbar-brand" href="#"><img className="agencyLogo" src={agencyLogo} alt=""/></a>
             </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                <li className="nav-item mr-5">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item mr-5">
                    <a className="nav-link" href="#">Our Portfolio</a>
                </li>

                <li className="nav-item mr-5">
                    <a className="nav-link" href="#">Our Team</a>
                </li>
                <li className="nav-item mr-5">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item mr-5">
                    <button className='login-btn '>Login</button>
                </li>

                </ul>
                
            </div>
         </nav>
       </div>
    );
};

export default NavigationBar;