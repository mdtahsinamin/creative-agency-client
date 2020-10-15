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
            <div className="col-md-8 mt-3 d-flex justify-content-center">
                <h4 className='mt-2'>Order</h4>
                <div className=''>

                </div>
            </div>
            </div>
        </section>
    );
};

export default Dashboard;