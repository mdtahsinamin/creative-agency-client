import React, { useContext, useState } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import './Order.css'
import { useForm } from "react-hook-form";

import cloudLogo from '../../../../images/cloud-upload-outline 1.png';
import {AiOutlineCloudUpload}  from 'react-icons/ai'; 
import { AgencyUser } from '../../../../App';
import { useParams } from 'react-router-dom';
const Order = () => {
    
    const {serviceTitle} = useParams();

    const [fileName , setFileName] = useState('Upload image');

    const [file ,setFile] = useState('');

    const { register, handleSubmit, watch, errors } = useForm();

    const [loginUser , setLoginUser] = useContext(AgencyUser);
   
    const [isSuccess , setSuccess] = useState('');

    const onChange = (event) =>{
         setFile(event.target.files[0]);
         setFileName(event.target.files[0].name);
    }


    const onSubmit = (data) =>{
      const formData = new FormData();
      formData.append('name',data.name);
      formData.append('email',data.email);
      formData.append('course',data.course);
      formData.append('projectDetails',data.projectDetails);
      formData.append('file',file);
      formData.append('status',false);
      fetch('http://localhost:5000/enrolCourse',{
            method: 'POST',
            body:formData
        })
        .then(response => response.json())
        .then(result => setSuccess(result));

    }
    

    return (
        <section className="container-fluid row">
                <div>
                <ExtraAppBar side={true}></ExtraAppBar>
                <SideBar></SideBar>
                </div>
               <div className="col-md-9 order-place p-4 pl-5" >

                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                       <div className="row mt-4">
                           <div className="col-md-12 order-section mb-3">

                           <input type="text" name='name' defaultValue={loginUser.currentName||loginUser.name} className='form-control' ref={register} placeholder='Your name / company’s name'/>

                           </div>

                           <div className="col-md-12 order-section mb-3">
                               
                             <input type="email" name="email" defaultValue={loginUser.currentEmail||loginUser.email} className="form-control" ref={register({ required: true })} placeholder='Your email address'/> 

                           </div>

                           <div className="col-md-12 order-section mb-3">
                               
                               <input type="text" name="course" defaultValue={serviceTitle} className="form-control" ref={register({ required: true })} placeholder='Graphic Design'/>
  
                             </div>

                             <div className="col-md-12 order-section mb-3">
                               
                              <textarea name="projectDetails" className="form-control" id="" cols="25" rows="5" ref={register} placeholder="Your message *"></textarea>
  
                             </div>

                             <div className="col-md-4 servicePrice">

                                <input className='form-control' name="price" placeholder='Price *' ref={register} />

                             </div>
                             <div className="col-md-4 order-label">
                             <input type="file" name="image" id="file" ref={register} onChange={onChange}/>
                                <label htmlFor="file">
                                <AiOutlineCloudUpload className ='cloudLogo'/>
                                  <span className='upload'> {fileName}</span></label>
                             </div>
                       </div>
                       <input type="submit" value='Send' className='hireUs-btn mt-3'/>
                    </form>
                   <p className='text-primary'>{isSuccess}</p>
             </div>

        </section>
    );
};
// <h5 className="text-brand mt-2">Order</h5>
//{ loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}
export default Order;
