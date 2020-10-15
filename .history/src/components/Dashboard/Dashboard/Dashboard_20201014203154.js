import React from 'react';
import SideBar from './SideBar/SideBar';

const Dashboard = () => {
    return (
        <section>
            <div className="col-md-3">
              <SideBar></SideBar>
            </div>
            <div className="col-md-9">

            </div>
        </section>
    );
};

export default Dashboard;