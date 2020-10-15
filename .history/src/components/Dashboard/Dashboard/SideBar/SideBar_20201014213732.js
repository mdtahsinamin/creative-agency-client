import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';

import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
       <div className="sidebar d-flex flex-colum justify-content-center col-md-4 py-5 px-4">
          <ul className="list-unstyled">
              <li>
                
                      <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> <span>Order</span>
                  
              </li>
              <li>
                  
                        <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon><span>Service list</span>
                 
              </li>
              <li>
                 
                      <RateReviewIcon></RateReviewIcon><span>Review</span>
                 
              </li>
              <li>
                  
                     <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span>Add Service</span>
           
              </li>

              <li>
                 
                      <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon><span>Make Admin</span>
               
              </li>
          </ul>
       </div>
    );
};

export default SideBar;