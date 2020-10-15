import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faOpenCard ,faUserPlus } from '@fortawesome/free-solid-svg-icons'

import RateReviewIcon from '@material-ui/icons/RateReview';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul>
            <li>
                <Link to="/order" className="text-white">
                    <FontAwesomeIcon icon={faOpenCard} /> <span>Order</span>
                </Link>
            </li>
            <li>
                <Link to="/serviceList" className="text-white">
                   <ListIcon/> <span>Service list</span>
                </Link>
            </li>
            <div>
                <li>
                    <Link to="/review" className="text-white">
                       <RateReviewIcon/><span>Appointments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <AddIcon/> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </div>
        </ul>
    </div>
    );
};

export default SideBar;