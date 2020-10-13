import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
       <section className='footer-section mt-5 pt-5 '>
           <div style={{height:'600px'}} className='row d-flex align-items-center'>
        <div className="col-md-4 offset-md-1">
            <h1 className='agency-title mb-4'>Let us handle <br/> your project, professionally.</h1>
            <p className='agency-description mb-5'>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
            <button className='hireUs-btn'>Hire us</button>
        </div>
        <div className="col-md-6">
        <form action="">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Email Address *"/>
        </div>
        <div className="form-group">
        <input type="text" className="form-control" placeholder="Subject *"/>
        </div>
        <div className="form-group">
         <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
         </div>
         <div className="form-group text-center">
            <button type="button" className="btn btn-primary"> Submit </button>
        </div>
        </form>
        </div>
       </div>
       </section>
    );
};

export default Footer;