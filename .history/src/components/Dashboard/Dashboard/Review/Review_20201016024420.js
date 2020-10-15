import React, { useContext } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import './Review.css'
import { useForm } from "react-hook-form";
import { AgencyUser } from '../../../../App';
const Review = () => {

   
    const [loginUser , setLoginUser] = useContext(AgencyUser)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) =>{
        console.log(data)
    }


    return (
        <section className="container-fluid row">

        <div>
        <ExtraAppBar side={true}></ExtraAppBar>
          <SideBar></SideBar>
        </div>

          <div className="col-md-9 p-4 pl-5 order-place">

             <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                   <div className="col-md-12 order-section mb-3">
                   <input type="text" name='name' className='form-control' ref={register} placeholder='Your name'/>
                   </div>
      

                 </div>     
                

            </form>

        </div>

    </section>
    );
};

export default Review;

/*
<h5 className="text-brand mt-2">Review</h5>
          { loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}
*/

/*

<div className='pl-5'>
            
          <div className='mt-5'>

          </div>
            </div>



            <div className="input-groups">
                     <input type="text" name='name' className='form-control' ref={register} placeholder='Your name'/>
                 </div>
                        
                <div className="input-groups">
                   <input type="text" name='companyName' className='form-control' ref={register} placeholder='Company’s name, Designation'/>
                </div>
                    
               <div className="input-groups">
                 <textarea name="description" className="form-control" id="" cols="25" rows="5" ref={register} placeholder="Description"></textarea>
              </div>
                
              <input type="submit" value='Send' className='hireUs-btn mt-3'/>
*/