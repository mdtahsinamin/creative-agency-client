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
         console.log(data);    

        fetch('http://localhost:5200/createNewAdmin',{
           method: 'POST',
           headers:{'Content-Type': 'application/json'},
           body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
     }
     
    return (
        <section className="container-fluid row">
            <div>
            <ExtraAppBar side={true}></ExtraAppBar>
              <SideBar></SideBar>
            </div>

            <div className="col-md-9 p-4 pl-5 order-place">
              <div className='pl-2'>

              <div className='mt-3 mb-5' style={{ position:'relative', top:'50px',height: '300px',width:'95%' ,borderRadius:'20px',backgroundColor:'#fff'}}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex ml-5'>
                         <div className='makeAdminInput mr-4 mt-3'>

                              <h6 className='mt-2'>Email</h6>

                               <input type="email" name='email'

                                 ref={register({
                                  required: "this is required",
                                  pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Invalid email address"
                                  }
                                })}
                                placeholder='john@gmail.com'
                                className="form-control" required/>

                            {errors.email && <p className='error-show'>{errors.email.message}</p>}

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

/*
<h5 className="text-brand mt-2">Make Admin</h5>
              { loginUser.name && <h5 style={{position:'absolute',right:0,top:'33px'}}>{loginUser.name}</h5>}
*/