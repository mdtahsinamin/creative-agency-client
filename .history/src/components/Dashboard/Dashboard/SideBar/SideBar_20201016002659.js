import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faUserPlus,faCartPlus,faPlus,faLockAlt,faListAlt } from '@fortawesome/free-solid-svg-icons'
import RateReviewIcon from '@material-ui/icons/RateReview';

import './SideBar.css';
import { Link } from 'react-router-dom';

import { SildeBarData } from './SildeBarData';

const SideBar = () => {

    return (
      <div>
           <ul>
              {
                  SildeBarData.map(item,index =>{
                        <li key={index} className={item.className}>
                               <Link to={item.path}>
                                   {item.icon}
                                 <span>{item.title}</span>
                               </Link>
                          </li>
                  })
              }
           </ul> 
      </div>
    );
};

export default SideBar;