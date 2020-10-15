import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';

import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
       <div className="sidebar d-flex flex-colum justify-content-center col-md-4 py-5 px-2">
             <div style={{display: 'inline-block'}} className="">
                 <Link to='/order'>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> <span>Add Service</span>
                 </Link>
             </div>
       </div>
    );
};

export default SideBar;