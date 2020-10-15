import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

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
                        
                  </Link>
              </li>
          </ul>
       </div>
    );
};

export default SideBar;