import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';

import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
       <div className="sidebar d-flex flex-colum justify-content-center col-md-3 py-5 px-2 ml-5 pt-5">
             <div style={{display: 'inline-block'}} className="">
                 <Link to='/order'>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> <span>Order</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="">
                 <Link to='/serviceList'>
                    <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon> <span>Service list</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="">
                 <Link to='/review'>
                    <RateReviewIcon></RateReviewIcon> <span>Review</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="">
                 <Link to='/addService'>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> <span>Add Service</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="">
                 <Link to='/makeAdmin'>
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> <span>Make Admin</span>
                 </Link>
             </div>
       </div>
    );
};

export default SideBar;