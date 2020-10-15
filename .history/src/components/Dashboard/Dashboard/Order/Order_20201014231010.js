import React, { useState } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import './Order.css'
import { useForm } from "react-hook-form";
const Order = () => {
  
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
            <div className='col-md-4' style={{height:'100vh'}}>
              <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>
            <div className="col-md-8 p-4 pr-5" >
                <h5 className="text-brand mt-2">Order</h5>
                 <div className='order-place pl-5'>
                     <div className='mt-5 pt-5'>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="input-groups">
                           <input type="text" name='name' className='form-control' ref={register} placeholder='Your name / company’s name'/>
                        </div>
                        
                        <div className="input-groups">
                            <input type="email" name="email" className="form-control" ref={register({ required: true })} placeholder='Your email address'/>
                        </div>
                        
                        <div className="input-groups">
                        <input type="text" name="course" className="form-control" ref={register({ required: true })} placeholder='Graphic Design'/>
                        </div>
                         
                         <div className="input-groups">
                         <textarea name="projectDetails" className="form-control" id="" cols="25" rows="5" ref={register} placeholder="Your message *"></textarea>
                         </div>

                        <input type="submit" value='Send' className='hireUs-btn mt-2'/>
                    </form>
                     </div>
                 </div>
            </div>
        </section>
    );
};
//style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
export default Order;
