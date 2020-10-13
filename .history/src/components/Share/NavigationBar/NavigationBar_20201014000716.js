import React from 'react';
import agencyLogo from '../../../images/logos/logo.png';
import './NavigationBar.css';
const NavigationBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#"><img src={agencyLogo} alt=""/></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Our Team</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
            </li>
             <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
            </li>
            </ul>
            
        </div>
     </nav>
    );
};

export default NavigationBar;