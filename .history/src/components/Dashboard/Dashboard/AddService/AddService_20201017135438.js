import React, { useContext, useState } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import './AddService.css';
import cloudLogo  from '../../../../images/cloud-upload-outline 1.png';
import { AgencyUser } from '../../../../App';
import {AiOutlineCloudUpload}  from 'react-icons/ai'; 
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
        
        const uploadImg = new FormData();

        formData.append('serviceTitle',data.serviceTitle);

        formData.append('description',data.description);

        formData.append('file',file);
        

        uploadImg.append('file',file);
        uploadImg.append('upload_present','agencypic');

        uploadCloudImage().then(response => response.json())
        .then(result => console.log(result));
       

       

        /*{fetch('http://localhost:5000/createNewService',{
            method: 'POST',
            body:formData
        })
        .then(response => response.json())
        .then(result => console.log(result));

        alert('New Service Added');}*/
       

        async function uploadCloudImage(){
             const request =  await fetch('	https://api.cloudinary.com/v1_1/dftjtnazj/image/upload',{
                  method: 'POST',
                  body:uploadImg
             })
             return request;
        }




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
                    
                    <div className="row ml-3">
                        <div className="col-md-4 mr-2 addService-section">

                         <h6 className='mt-2'>Service Title</h6>
                         <input type="text" name='serviceTitle' className='form-control' ref={register} placeholder='Enter Title'/>
                              
                        </div>

                        <div className="col-md-4 file-label">
                             
                             <h6 className='mt-2 icon-title'>Icon</h6>
                             <input type="file" name="image" id="file" ref={register} onChange={onChange}/>
                             <label className='file-label' htmlFor="file">
                             <AiOutlineCloudUpload className ='addServiceUpload'/>
                             <span className='addServiceUpload'> {fileName}</span></label>

                        </div>

                        <div className="col-md-12 addService-section">
                           
                         <h6 className='mt-2'>Description</h6>
                         <textarea name="description" className="form-control" id="" cols="15" rows="5" ref={register} placeholder="Description *"></textarea>

                        </div>
                    </div>
                    <input type="submit" value="Submit" className='submit-btn'/>
                 </form>
                  
             </div>
        </div>
    </section>
    );
};

export default AddService;

//<h5 className="text-brand mt-2">Add Service</h5>

//{ loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}
