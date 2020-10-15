import React from 'react';
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
                 <form onSubmit={handleSubmit(onSubmit)}>
                
                    <input name="example" defaultValue="test" ref={register} />
                    
                    
                    <input name="exampleRequired" ref={register({ required: true })} />
                    
            
                      <input type="submit" />
                  </form>
                 </div>
            </div>
        </section>
    );
};
//style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
export default Order;
