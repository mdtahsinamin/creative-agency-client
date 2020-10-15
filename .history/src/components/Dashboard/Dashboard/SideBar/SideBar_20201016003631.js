import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { VscPreview } from "react-icons/vsc";
import { FaOpencart } from "react-icons/fa";
import {GrServicePlay} from "react-icons/gr"
import {FcSelfServiceKiosk} from "react-icons/fc";
import {MdAdd} from "react-icons/md";
import {BsPersonPlusFill} from "react-icons/bs";

const SideBar = () => {

    return (
      <div>
           <ul>

              <li key={1} className='nav-text'>
                 <Link to='/order'>
                     <FaOpencart></FaOpencart>
                     <span>Order</span>
                 </Link>
              </li>

              <li key={2} className='nav-text'>
                 <Link to='/serviceList'>
                     <GrServicePlay></GrServicePlay>
                     <span>Service List</span>
                 </Link>
              </li>

              <li key={3} className='nav-text'>
                 <Link to='/Review'>
                     <VscPreview></VscPreview>
                     <span>Review</span>
                 </Link>
              </li>

              <li key={4} className='nav-text'>
                 <Link to='/addService'>
                     <MdAdd></MdAdd>
                     <span>Add Service</span>
                 </Link>
              </li>

              <li key={5} className='nav-text'>
                 <Link to='/makeAdmin'>
                     <IoIosPersonAdd></IoIosPersonAdd>
                     <span>Make Admin</span>
                 </Link>
              </li>
           </ul> 
      </div>
    );
};

export default SideBar;