import React, { useContext, useEffect, useState } from 'react';
import { AgencyUser } from '../../../../App';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';

const CustomerServiceList = () => {
     
     const [loginUser,setLoginUser] = useContext(AgencyUser);
     
     const [customerService , setCustomerService] = useState([]);
    
     useEffect(()=>{
       
        async function loadData() {
        const request =  await fetch(`http://localhost:5000/customerAllService?email=${loginUser.email||loginUser.currentEmail}`,{
           method: 'GET',
           headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${sessionStorage.getItem('token')}`
           }

         }) 
         return request;
        }
        loadData().then(response => response.json())
        .then(data => setCustomerService(data))

     },[])

    
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

export default CustomerServiceList;