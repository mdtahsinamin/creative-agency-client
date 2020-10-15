import React from 'react';
import SideBar from './SideBar/SideBar';

const Dashboard = () => {




    const containerStyle = {
        backgroundColor: "#F4FDFB",
    }

    return (
        <section>
            <div className="row">
            <div className="col-md-4">
              <SideBar></SideBar>
            </div>
            <div className="col-md-8 mt-3">
                <h4 className=''>Order</h4>
            </div>
            </div>
        </section>
    );
};

export default Dashboard;