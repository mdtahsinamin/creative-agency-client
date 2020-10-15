import React from 'react';
import { Link } from 'react-router-dom';
import agencyLogo from '../../../images/logos/logo.png'
import './ExtraAppBar.css'
const ExtraAppBar = (props) => {
    
    return (
        <div className="container">
            <Link to='/home'><img className={props.side?'':'extraAppBar'} src={agencyLogo} alt=""/></Link>
        </div>
    );
};

export default ExtraAppBar;