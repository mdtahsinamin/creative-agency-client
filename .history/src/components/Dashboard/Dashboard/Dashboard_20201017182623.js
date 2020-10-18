import React, { useContext, useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import { useForm } from "react-hook-form";
import Order from './Order/Order';
import { AgencyUser } from '../../../App';
import ServiceList from './ServiceList/ServiceList';
const Dashboard = () => {
    
    const [loginUser , setLoginUser] = useContext(AgencyUser);
    

    return (
        <section>
            { !sessionStorage.getItem('admin') ? <Order></Order>:<ServiceList></ServiceList>}
        </section>
    );
};

export default Dashboard;