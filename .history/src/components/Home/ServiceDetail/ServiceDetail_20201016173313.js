import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    
    const history = useHistory();

    const handleChange = (title) =>{
           
        history.push(`/${services.title}`);
    }

    return (
        <div onClick={handleChange} className="col-md-4 text-center services">
        <img className='mt-2' style={{height: '50px'}} src={service.image} alt="" />
        <h5 className="mt-3 mb-3">{service.title}</h5>
        <p className="text-secondary">{service.description}</p>
    </div>
    );
};

export default ServiceDetail;