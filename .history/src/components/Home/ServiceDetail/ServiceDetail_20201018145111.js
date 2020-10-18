import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    
    const history = useHistory();

    const handleChange = (title) =>{
           
        history.push(`/dashboard/${title}`);
    }

    return (
        <div onClick={()=> handleChange(service.serviceTitle)} className="col-md-4 text-center services">
        <img className='img-fluid rounded-circle mt-2 home-services' style={{height: '50px'}} src={`data:image/jpeg;base64,${service.image.img}`} alt="" />
        <h5 className="mt-3 mb-3">{service.serviceTitle}</h5>
        <p className="text-secondary">{service.description}</p>
    </div>
    );
};

export default ServiceDetail;
