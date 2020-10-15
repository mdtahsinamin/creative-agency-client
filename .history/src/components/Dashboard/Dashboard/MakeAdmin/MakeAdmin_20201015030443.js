import React, { useContext } from 'react';
import ExtraAppBar from '../../../Share/ExtraAppBar/ExtraAppBar';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';
import { AgencyUser } from '../../../../App';
const MakeAdmin = () => {
    

    const [loginUser , setLoginUser] = useContext(AgencyUser)
    const { register, handleSubmit, watch, errors } = useForm();

     const onSubmit = (data) =>{
         async function postData (){
            const request = await fetch('http://localhost:5000/createNewAdmin',{
              method:'POST',
              header:{'Content-Type': 'application/json'},
              body: JSON.stringify(data)
            });
            return request;
         }     
         
         postData().then(response => response.json()).
         then(result => {
            console.log(result);
         })
     }
    
    return (
        <section className="container-fluid row">
            <div className="col-md-4" style={{height:'100vh'}}>
            <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>

            <div className="col-md-8 p-4 pr-5">
              <h5 className="text-brand mt-2">Make Admin</h5>
              { loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}
              <div className='order-place pl-5'>

              
              <div className='mt-5 mb-5' style={{ position:'relative', top:'50px',height: '300px',width:'95%' ,borderRadius:'20px',backgroundColor:'#fff'}}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex ml-5'>
                         <div className='makeAdminInput mr-4 mt-3'>
                              <h6 className='mt-2'>Email</h6>
                               <input type="email" name='email' placeholder='john@gmail.com' ref={register} className="form-control"/>
                         </div>
                         <div className='mt-3' >
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