import React, { useContext, useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import { useForm } from "react-hook-form";
import Order from './Order/Order';
import { AgencyUser } from '../../../App';
import ServiceList from './ServiceList/ServiceList';
import { useParams } from 'react-router-dom';
const Dashboard = () => {
    
    const [loginUser , setLoginUser] = useContext(AgencyUser);
    
    const value = sessionStorage.getItem('admin');
    const {serviceTitle} = useParams();

    return (
        <section>
           <Order></Order>
        </section>
    );
};

export default Dashboard;

//  {(value==='false')? <Order></Order>:<ServiceList></ServiceList>}