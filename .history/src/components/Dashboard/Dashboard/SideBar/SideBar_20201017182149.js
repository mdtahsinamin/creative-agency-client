import React, { useContext, useEffect, useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { VscPreview } from "react-icons/vsc";
import { FaOpencart } from "react-icons/fa";
import {CgList} from "react-icons/cg"
import {FcSelfServiceKiosk} from "react-icons/fc";
import {MdAdd} from "react-icons/md";
import {BsPersonPlusFill} from "react-icons/bs";
import { AgencyUser } from '../../../../App';

const SideBar = () => {
    
    const [loginUser , setLoginUser] = useContext(AgencyUser);
    
    const [isAdmin ,setIsAdmin] = useState(false);
  
    
    useEffect(()=>{
        const loginUserEmail = loginUser.email || loginUser.currentEmail;

        fetch('http://localhost:5200/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({loginUserEmail})
        }).then(response => response.json())
        .then(data => setIsAdmin(data));

    },[])
    
    sessionStorage.setItem('admin',isAdmin);


    const LinkStyle = {
        textDecoration: 'none'
    }

    return (
      <div>
           <nav className='nav-menu'>
              <ul className='nav-menu-items list-unstyled'>
                
                {sessionStorage.getItem('admin')!==false ? <div>
                    <li key={1} className='nav-text'>
                    <Link style={LinkStyle} to='/order'>
                        <FaOpencart></FaOpencart>
                        <span>Order</span>
                    </Link>
                    </li>

                <li key={2} className='nav-text'>
                    <Link style={LinkStyle}  to='/customerServiceList'>
                        <CgList></CgList>
                        <span>Service List</span>
                    </Link>
                    </li>

                <li key={3} className='nav-text'>
                    <Link style={LinkStyle}  to='/Review'>
                        <VscPreview></VscPreview>
                        <span>Review</span>
                    </Link>
                    </li>
                </div> :
                <div>
                   <li key={2} className='nav-text'>
                <Link style={LinkStyle}  to='/ServiceList'>
                    <CgList></CgList>
                    <span>Service List</span>
                </Link>
                </li>

               <li key={4} className='nav-text'>
                <Link style={LinkStyle}  to='/addService'>
                    <MdAdd></MdAdd>
                    <span>Add Service</span>
                </Link>
                </li>

                <li key={5} className='nav-text'>
                <Link style={LinkStyle}  to='/makeAdmin'>
                    <BsPersonPlusFill></BsPersonPlusFill>
                    <span>Make Admin</span>
                </Link>
                </li>
                 </div>
}
                </ul> 
           </nav>
      </div>
    );
};

export default SideBar;