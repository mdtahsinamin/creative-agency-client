import React, { useContext } from 'react';
import { AgencyUser } from '../../../../App';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import './ServiceList.css'

const ServiceList = () => {
    
  
  const [loginUser , setLoginUser] = useContext(AgencyUser)
   


    return (
        <section className="container-fluid row">
            <div className="col-md-4" style={{height:'100vh'}}>
            <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>
            <div className="col-md-8 p-4 pr-5">

              <h5 className="text-brand mt-2">Service List</h5>

              { loginUser.isLogin && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}

              <div className='order-place pl-5'>

              </div>

            </div>
        </section>
    );
};

export default ServiceList;