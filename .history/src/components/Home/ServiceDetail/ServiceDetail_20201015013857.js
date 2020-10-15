import React from 'react';
import './ServiceDetail.css';
const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center services">
        <img style={{height: '50px'}} src={service.image} alt="" />
        <h5 className="mt-3 mb-3">{service.title}</h5>
        <p className="text-secondary">{service.description}</p>
    </div>
    );
};

export default ServiceDetail;