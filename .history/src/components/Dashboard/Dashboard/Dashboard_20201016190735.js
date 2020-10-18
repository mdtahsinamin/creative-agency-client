import React, { useContext, useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import { useForm } from "react-hook-form";
import Order from './Order/Order';
import { AgencyUser } from '../../../App';
import ServiceList from './ServiceList/ServiceList';
const Dashboard = () => {
    
    const [loginUser , setLoginUser] = useContext(AgencyUser);
    
    const [isAdmin ,setIsAdmin] = useState(false);

    useEffect(()=>{
        const loginUserEmail = loginUser.email || loginUser.currentEmail;

        fetch('http://localhost:5000/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({loginUserEmail})
        }).then(response => response.json())
        .then(data => setIsAdmin(data));

    },[])

    return (
        <section>
            { <Order></Order>}
            { <ServiceList></ServiceList>}
        </section>
    );
};

export default Dashboard;