import React from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    


    const { register, handleSubmit, watch, errors } = useForm();

     const onSubmit = (data) =>{
          console.log(data)
     }

    return (
        <section className="container-fluid row">
            <div className="col-md-4" style={{height:'100vh'}}>
            <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>

            <div className="col-md-8 p-4 pr-5">
              <h5 className="text-brand mt-2">Make Admin</h5>
              <div className='order-place pl-5'>
              <div className='mt-5' style={{ position:'relative', top:'50px',height: '300px',width:'95%' ,borderRadius:'20px',backgroundColor:'#fff'}}>
                   <div className='d-flex ml-5'>
                         <div className='mr-4'>
                              <h6 className='mt-2'>Email</h6>
                         </div>
                   </div>
                </div>
              </div>
            </div>
        </section>
    );
};

export default MakeAdmin;