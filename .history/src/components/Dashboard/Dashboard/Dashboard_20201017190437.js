import React, { useContext, useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import { useForm } from "react-hook-form";
import Order from './Order/Order';
import { AgencyUser } from '../../../App';
import ServiceList from './ServiceList/ServiceList';
const Dashboard = () => {
    
    const [loginUser , setLoginUser] = useContext(AgencyUser);
    
    const value = sessionStorage.getItem('admin');

    return (
        <section>
            {(value==='false')? <Order></Order>:<ServiceList></ServiceList>}
        </section>
    );
};

export default Dashboard;