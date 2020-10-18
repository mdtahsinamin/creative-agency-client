import { LinearProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { AgencyUser } from '../../../../App';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import CustomerServiceDetail from './CustomerServiceDetail';

const CustomerServiceList = () => {
     
     const [loginUser,setLoginUser] = useContext(AgencyUser);
     
     const [customerService , setCustomerService] = useState([]);
     

     useEffect(()=>{
           
        async function loadData(){

           const request =  await fetch(`http://localhost:5200/clientEnrollServices?email=${(loginUser.email||loginUser.currentEmail)}`,{
              method: 'GET',
              headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
              }
           })

           return request;
        }
       
        loadData().then(response => response.json())
        .then(data =>setCustomerService(data));

     },[])
     

   console.log(customerService.length);


    
    return (
        <section className="container-fluid row">
        <div>
          <ExtraAppBar side={true}></ExtraAppBar>
          <SideBar></SideBar>
        </div>
        <div className="col-md-9 p-4 pl-5 order-place">

          <div className=''>
             <div className="row">
               
               {  customerService.length === 0 ?  <LinearProgress/> :
                   customerService.map(service=><CustomerServiceDetail service={service} key={service._id}></CustomerServiceDetail>)
               }
                 
             </div>

          </div>

        </div>
    </section>
    );
};

export default CustomerServiceList;