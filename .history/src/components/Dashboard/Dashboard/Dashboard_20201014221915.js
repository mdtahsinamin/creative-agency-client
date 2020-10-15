import React from 'react';
import SideBar from './SideBar/SideBar';

const Dashboard = () => {




    const containerStyle = {
        backgroundColor: "#F4FDFB",
        border: '1px solid red'
    }

    return (
        <section>
            <div style={containerStyle} className="row">
            <div className="col-md-4">
              <SideBar></SideBar>
            </div>
            <div className="col-md-8">
                
            </div>
            </div>
        </section>
    );
};

export default Dashboard;