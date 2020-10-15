import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faOpenCard ,faUserPlus } from '@fortawesome/free-solid-svg-icons'

import RateReviewIcon from '@material-ui/icons/RateReview';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ListIcon from '@material-ui/icons/List';

import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link to="/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
            </li>
            {isDoctor && <div>
                <li>
                    <Link to="/allPatients" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/patient" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addDoctor" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                    </Link>
                </li>
            </div>}
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default SideBar;