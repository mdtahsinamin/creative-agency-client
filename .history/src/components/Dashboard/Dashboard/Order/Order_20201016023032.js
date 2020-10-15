import React, { useContext, useState } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import './Order.css'
import { useForm } from "react-hook-form";

import cloudLogo from '../../../../images/cloud-upload-outline 1.png';
import {AiOutlineCloudUpload}  from 'react-icons/ai'; 
import { AgencyUser } from '../../../../App';
const Order = () => {
  

    const [fileName , setFileName] = useState('Upload image');
    const [file ,setFile] = useState('');
    const { register, handleSubmit, watch, errors } = useForm();
    const [loginUser , setLoginUser] = useContext(AgencyUser)


    const onChange = (event) =>{
         setFile(event.target.files[0]);
         setFileName(event.target.files[0].name);
    }


    const onSubmit = (data) =>{
        console.log(data)
    }


    return (
        <section className="container-fluid row">
                <div>
                <ExtraAppBar side={true}></ExtraAppBar>
                <SideBar></SideBar>
                </div>
               <div className="col-md-9 order-place p-4 pl-5" >

                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                       <div className="row">
                           <div className="col-md-12 order-section mb-3">

                           <input type="text" name='name' className='form-control' ref={register} placeholder='Your name / company’s name'/>

                           </div>

                           <div className="col-md-12 order-section mb-3">
                               
                             <input type="email" name="email" className="form-control" ref={register({ required: true })} placeholder='Your email address'/> 

                           </div>

                           <div className="col-md-12 order-section mb-3">
                               
                               <input type="text" name="course" className="form-control" ref={register({ required: true })} placeholder='Graphic Design'/>
  
                             </div>

                             <div className="col-md-12 order-section mb-3">
                               
                              <textarea name="projectDetails" className="form-control" id="" cols="25" rows="5" ref={register} placeholder="Your message *"></textarea>
  
                             </div>

                             <div className="col-md-4 ml-1 servicePrice">

                                <input className='form-control' name="price" placeholder='Price *' ref={register} />

                             </div>
                             <div className="col-md-5">
                             <input type="file" name="image" id="file" ref={register} onChange={onChange}/>
                                <label htmlFor="file">
                                <AiOutlineCloudUpload className ='cloudLogo'/>
                                  <span className='upload'> {fileName}</span></label>
                             </div>
                       </div>
                    

                     
                        
                    </form>

                    
                 
             </div>

        </section>
    );
};
// <h5 className="text-brand mt-2">Order</h5>
//{ loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}
export default Order;

/*
                
                        
                        <div className="input-groups">
                            <input type="email" name="email" className="form-control" ref={register({ required: true })} placeholder='Your email address'/>
                        </div>
                        
                        <div className="input-groups">
                        <input type="text" name="course" className="form-control" ref={register({ required: true })} placeholder='Graphic Design'/>
                        </div>
                         
                         <div className="input-groups">
                         <textarea name="projectDetails" className="form-control" id="" cols="25" rows="5" ref={register} placeholder="Your message *"></textarea>
                         </div>
                        
                         <div className='d-flex mt-2'>

                            <div className="mr-2 ServicePrice">
                              <input className='form-control' name="price" placeholder='Price *' ref={register} />
                            </div>

                            <div>
                            <input type="file" name="image" id="file" ref={register} onChange={onChange}/>
                                <label htmlFor="file">
                                <AiOutlineCloudUpload className ='cloudLogo'/>
                                  <span className='upload'> {fileName}</span></label>
                            </div>

                         </div>

                        <input type="submit" value='Send' className='hireUs-btn mt-2'/>
  
*/