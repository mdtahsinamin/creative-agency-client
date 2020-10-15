import React, { useState } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import './AddService.css';
import cloudLogo  from '../../../../images/cloud-upload-outline 1.png';

const AddService = () => {

    const [fileName , setFileName] = useState('Upload image');
    const [file ,setFile] = useState('');
    const { register, handleSubmit, watch, errors } = useForm();
    


    const onChange = (event) =>{
         setFile(event.target.files[0]);
         setFileName(event.target.files[0].name);
    }


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

          <h5 className="text-brand mt-2">Add Service</h5>

          <div className='order-place pl-5'>
             
             <div className='mt-5' style={{ position:'relative', top:'50px',height: '300px',width:'95%' ,borderRadius:'20px',backgroundColor:'#fff'}}>
                  
             <form onSubmit={handleSubmit(onSubmit)}>
                 <div className='d-flex ml-5'>
                        
                    <div className='mr-4'>
                        <h6 className='mt-2'>Service Title</h6>
                        <input type="text" name='serviceTitle' className='serviceTitle' ref={register} placeholder='Enter Title'/>
                    </div>

                     <div>
                        <h6 className='mt-2'>Icon</h6>
                     <input type="file" name="image" id="file" ref={register} onChange={onChange}/>
                            <label htmlFor="file">
                             <img className ='addServiceLogo' src={cloudLogo} alt=""/>
                             <span className='addServiceUpload'> {fileName}</span></label>
                    </div>      
                 </div>
                  
                  <div className='ml-5'>
                      <h6 className='mt-2'>Description</h6>
                      <textarea name="description" className="addServiceDescription form-control" id="" cols="15" rows="5" ref={register} placeholder="Description *"></textarea>
                  </div>

                  <input type="submit" value="Submit" className='submit-btn'/>
             </form>
                  

             </div>

          </div>
        </div>
    </section>
    );
};

export default AddService;