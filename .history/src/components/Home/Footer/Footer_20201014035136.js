import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
       <section className='footer-section mt-5'>
           
           <div style={{height:'600px'}} className='row d-flex justify-content-center mt-5'>

            <div className="col-md-4 offset-md-1">
                <h2 className='footer-title'>Let us handle your <br/> project, professionally.</h2>
                <p className='footer-description'>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
            </div>

            <div className="col-md-6">
            <form action="">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email Address *"/>
                </div>

                <div className="form-group">
                <input type="text" className="form-control" placeholder="Your name / company’s name *"/>
                </div>

                <div className="form-group">
                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message *"></textarea>
                </div>
                
                <div className="form-group">
                    <button type="button" className="hireUs-btn"> Submit </button>
                </div>
            </form>

            </div>

        </div>

        <div className="copyRight text-center">
                    <p>Copyright Orange labs {(new Date()).getFullYear()} </p>
        </div>
        
       </section>
    );
};

export default Footer;