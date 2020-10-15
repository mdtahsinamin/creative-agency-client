import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';

import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
       <div className="sidebar  flex-colum justify-content-center col-md-4 py-5 px-2 ml-5 pt-5">
             <div style={{display: 'inline-block'}} className="mb-3">
                 <Link to='/order' style={{textDecoration:'none'}} className='icon-links'>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> <span>Order</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="mb-3">
                 <Link to='/serviceList' style={{textDecoration:'none',color:'#111111'}} className='icon-links'>
                    <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon> <span>Service list</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="mb-3">
                 <Link to='/review' style={{textDecoration:'none',color:'#111111'}} className='icon-links'>
                    <RateReviewIcon small></RateReviewIcon><span>Review</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="mb-3">
                 <Link to='/addService' style={{textDecoration:'none',color:'#111111'}} className='icon-links'>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> <span>Add Service</span>
                 </Link>
             </div>
             <div style={{display: 'inline-block'}} className="mb-3">
                 <Link to='/order' style={{textDecoration:'none',color:'#111111'}} className='icon-links'>
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> <span>Make Admin</span>
                 </Link>
             </div>
       </div>
    );
};

export default SideBar;