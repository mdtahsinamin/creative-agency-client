import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';

import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
       <div className="sidebar  flex-colum justify-content-center col-md-4 py-5 px-2 ml-5 pt-5">
             <div style={{display: 'inline-block'}} className="mb-5">
                 <Link to='/order'>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> <span>Make Admin</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="">
                 <Link to='/order'>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> <span>Make Admin</span>
                 </Link>
             </div>
       </div>
    );
};

export default SideBar;