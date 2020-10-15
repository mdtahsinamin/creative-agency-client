import React from 'react';
import SideBar from './SideBar/SideBar';

const Dashboard = () => {
    return (
        <section>
            <div className="col-md-4">
              <SideBar></SideBar>
            </div>
            <div className="col-md-8">
              
            </div>
        </section>
    );
};

export default Dashboard;