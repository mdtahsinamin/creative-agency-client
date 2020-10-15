import React from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';
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
              <div className='mt-5 mb-5' style={{ position:'relative', top:'50px',height: '300px',width:'95%' ,borderRadius:'20px',backgroundColor:'#fff'}}>
              <form  className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex ml-5'>
                         <div className='makeAdminInput mr-4'>
                              <h6 className='mt-2'>Email</h6>
                               <input type="email" name='email' placeholder='john@gmail.com' ref={register} className="form-control"/>
                         </div>
                         <div>
                             <input type="submit" value="Submit" className="make-admin-btn"/>
                         </div>
                   </div>
               </form>
                </div>
              </div>
            </div>
        </section>
    );
};

export default MakeAdmin;