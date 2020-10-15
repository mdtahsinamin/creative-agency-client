import React from 'react';
import './OurWork.css';
import Slider from "react-slick";

const OurWork = () => {
    
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false
      };


    return (
        <section  className='mt-5 pt-5 mb-5 our-works-container'>
             <div className="text-center pt-5">
                <h2 style={{color:'#ffff'}} className='services-title'>Here are some of <span style={{color:' #7AB259'}}>our works</span></h2>
            </div>
            
            <div style={{height:'450px'}} className="d-flex align-items-center justify-content-center">
                <div className="w-75 mt-5 pt-5"> 
                <>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                     </Slider>
                    </>
                </div>
            </div>
        </section>
    );
};

export default OurWork;