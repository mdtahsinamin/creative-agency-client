import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';
import Web from '../../../images/icons/service1.png'
import gp from '../../../images/icons/service2.png'
import dev from '../../../images/icons/service3.png'
const serviceData = [
    {
    title: ' Web & Mobile design',
    description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
    image:Web
    },
    {
    title:'Graphic design', 
    description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    image:gp
    },
    {
        title:'Web development',
        description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        image:dev
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 className='services-title'>Provide awesome <span style={{color:' #7AB259'}}>services</span>.</h2>
            </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;