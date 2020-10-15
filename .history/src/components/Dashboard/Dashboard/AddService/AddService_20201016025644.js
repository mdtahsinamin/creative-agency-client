import React, { useContext, useState } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import './AddService.css';
import cloudLogo  from '../../../../images/cloud-upload-outline 1.png';
import { AgencyUser } from '../../../../App';

const AddService = () => {

    const [fileName , setFileName] = useState('Upload image');
    const [file ,setFile] = useState('');
    const { register, handleSubmit, watch, errors } = useForm();
    
    const [loginUser , setLoginUser] = useContext(AgencyUser)


    const onChange = (event) =>{
         setFile(event.target.files[0]);
         setFileName(event.target.files[0].name);
    }


    const onSubmit = (data) =>{
        const formData = new FormData();

        formData.append('serviceTitle',data.serviceTitle);

        formData.append('description',data.description);

        formData.append('file',file);

        fetch('http://localhost:5000/createNewService',{
            method: 'POST',
            body:formData
        })
        .then(response => response.json())
        .then(result => console.log(result));
    }



    return (
        <section className="container-fluid row">
          <div>
            <ExtraAppBar side={true}></ExtraAppBar>
            <SideBar></SideBar>
          </div>
       
        <div className="col-md-9 order-place p-4 pl-5">
 
             <div style={{ position:'relative', top:'50px',height: '300px',width:'95%' ,borderRadius:'20px',backgroundColor:'#fff'}}>
                  
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="row">
                        <div className="col-md-4 ml-2 mr-2 ">

                         <h6 className='mt-2'>Service Title</h6>
                         <input type="text" name='serviceTitle' className='form-control' ref={register} placeholder='Enter Title'/>
                              
                        </div>

                        <div className="col-md-4">
                             
                             <h6 className='mt-2'>Icon</h6>
                             <input type="file" name="image" id="file" ref={register} onChange={onChange}/>
                             <label htmlFor="file">
                             <img className ='addServiceLogo' src={cloudLogo} alt=""/>
                             <span className='addServiceUpload'> {fileName}</span></label>

                        </div>
                    </div>

                 </form>
                  
             </div>
        </div>
    </section>
    );
};

export default AddService;

//<h5 className="text-brand mt-2">Add Service</h5>

//{ loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}
/*
 <div className='d-flex ml-5'>
                        
                    <div className='mr-4 serviceTitle'>
                        <h6 className='mt-2'>Service Title</h6>
                        <input type="text" name='serviceTitle' className='form-control' ref={register} placeholder='Enter Title'/>
                    </div>

                     <div>
                        <h6 className='mt-2'>Icon</h6>
                     <input type="file" name="image" id="file" ref={register} onChange={onChange}/>
                            <label htmlFor="file">
                             <img className ='addServiceLogo' src={cloudLogo} alt=""/>
                             <span className='addServiceUpload'> {fileName}</span></label>
                    </div>      
                 </div>
                  
                  <div className='ml-5 addServiceDescription'>
                      <h6 className='mt-2'>Description</h6>
                      <textarea name="description" className="form-control" id="" cols="15" rows="5" ref={register} placeholder="Description *"></textarea>
                  </div>

                  <input type="submit" value="Submit" className='submit-btn'/>


*/

//