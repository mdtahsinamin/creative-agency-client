import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';

import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
       <div className="sideBar d-flex flex-colum justify-content-center col-md-4 py-5 px-4" style={{ height: "100vh" }}>
          <ul className="list-unstyled">
              <li>
                  <Link to='/order'>
                      <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> <span>Order</span>
                  </Link>
              </li>
              <li>
                  <Link to='/serviceList'>
                        <FontAwesomeIcon icon={faListAlt}></FontAwesomeIcon><span>Service List</span>
                  </Link>
              </li>
              <li>
                  <Link to='/review'>
                      <RateReviewIcon></RateReviewIcon><span>Review</span>
                  </Link>
              </li>
              <li>
                  <Link to='/addService'>
                     <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span>Add Service</span>
                  </Link>
              </li>
              <li>
                  <Link to='/makeAdmin'>
                      <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon><span>Review</span>
                  </Link>
              </li>
          </ul>
       </div>
    );
};

export default SideBar;