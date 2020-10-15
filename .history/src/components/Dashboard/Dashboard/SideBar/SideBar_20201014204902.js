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
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link to="/order" className="">
                    <FontAwesomeIcon icon={faCartPlus}/> <span>Order</span>
                </Link>
            </li>
            <li>
                <Link to="/serviceList" className="">
                   <ListIcon/> <span>Service list</span>
                </Link>
            </li>
            <div>
                <li>
                    <Link to="/review" className="">
                       <RateReviewIcon/><span>Appointments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="">
                        <AddIcon/> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </div>
        </ul>
    </div>
    );
};

export default SideBar;