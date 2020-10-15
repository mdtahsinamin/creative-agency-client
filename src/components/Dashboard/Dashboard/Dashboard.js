import React from 'react';
import SideBar from './SideBar/SideBar';
import { useForm } from "react-hook-form";
import Order from './Order/Order';
const Dashboard = () => {

    return (
        <section>
            <Order></Order>
        </section>
    );
};

export default Dashboard;