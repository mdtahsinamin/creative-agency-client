import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus } from '@fortawesome/free-solid-svg-icons'

import RateReviewIcon from '@material-ui/icons/RateReview';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-4 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link to="/order" className="text-secondary">
                   <FontAwesomeIcon icon={faCartPlus}/> <span>Order</span>
                </Link>
            </li>
            <li>
                <Link to="/serviceList" className="text-secondary">
                      <ListIcon/> <span>Service list</span>
                </Link>
            </li>
            <div>
                <li>
                    <Link to="/review" className="text-secondary">
                       <RateReviewIcon/><span>review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-secondary">
                        <AddIcon/> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-secondary">
                        <FontAwesomeIcon icon={faUserPlus}/> <span>Make Admin</span>
                    </Link>
                </li>
            </div>
        </ul>
    </div>
    );
};

export default SideBar;