import React from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';

const Order = () => {
    return (
        <section className="container-fluid row">
            <div className='col-md-4'>
              <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>
            <div className="col-md-8 p-4 pr-5" >
                <h5 className="text-brand mt-2">Order</h5>
                 <div style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h1>j</h1>
                 </div>
            </div>
        </section>
    );
};
//style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
export default Order;
