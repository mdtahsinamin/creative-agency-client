import React from 'react';
import SideBar from '../SideBar/SideBar';

const Order = () => {
    return (
        <section className="container-fluid row">
            <div className='col-md-4'>
              <SideBar></SideBar>
            </div>
            <div className="col-md-8 p-4 pr-5" >
                <h5 className="text-brand">Order</h5>
                 
            </div>
        </section>
    );
};
//style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
export default Order;
