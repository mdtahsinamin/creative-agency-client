import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AgencyUser } from '../../../App';
import agencyLogo from '../../../images/logos/logo.png';
import './NavigationBar.css';
const NavigationBar = () => {
    
    const[loginUser , setLoginUser] = useContext(AgencyUser);

    const history = useHistory();

    const handleChange = ()=>{
       history.push('/login');
    }
   
    const handleLoginUser = ()=>{

    }

    return (
       <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light ">
             
                <Link to='/' className="navbar-brand"><img className="agencyLogo" src={agencyLogo} alt=""/></Link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                </button>

             <div className="collapse navbar-collapse mt-5 pt-3" id="navbarSupportedContent">
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

                { sessionStorage.getItem('admin') && <li className="nav-item mr-5">
                    <Link className="nav-link" to="/serviceList">Admin Dashboard</Link>
                </li>
                }
                {!(loginUser.email||loginUser.currentEmail )&&<li className="nav-item mr-5">
                    <button onClick={handleChange} className='login-btn'>Login</button>
                </li>
                   
                }
                
                {
                (loginUser.email||loginUser.currentEmail )&&<li className="nav-item mr-5">
                    <button onClick={handleLoginUser} className='login-btn'>Logout</button>
                </li>
                }
                </ul>
            </div>
         </nav>
       </div>
    );
};

export default NavigationBar;