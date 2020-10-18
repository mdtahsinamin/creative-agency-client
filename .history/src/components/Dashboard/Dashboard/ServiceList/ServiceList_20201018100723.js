import React, { useContext, useEffect, useState } from 'react';
import { AgencyUser } from '../../../../App';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import './ServiceList.css'

const ServiceList = () => {
    
  
  const [loginUser , setLoginUser] = useContext(AgencyUser);

  const [allCustomer,setAllCustomer] = useState([]);
  
   useEffect(()=>{
       
       async function loadData() {
            
           const request = await fetch('http://localhost:5200/allCustomer')

           return request;
       }

       loadData().then(response => response.json())
       .then(data =>  setAllCustomer(data));      
   },[])
   
   console.log(allCustomer.length);

    return (
        <section className="container-fluid row">
            <div>
            <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>
            <div className="col-md-9 p-4 pl-5 order-place">

              <div className='pl-5'>
                       

              </div>

            </div>
        </section>
    );
};

export default ServiceList;

/*
 <h5 className="text-brand mt-2">Service List</h5>

              { loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}

*/