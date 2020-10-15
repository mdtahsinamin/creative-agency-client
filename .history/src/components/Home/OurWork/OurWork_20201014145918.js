import React from 'react';

import Slider from "react-slick";
import './OurWork.css';
import './slick.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carouselImgFirst from '../../../images/carousel-1.png'
import carouselImgSecond from '../../../images/carousel-2.png'
import carouselImgThird from '../../../images/carousel-3.png'
import carouselImgFour from '../../../images/carousel-4.png'
import carouselImgFive from '../../../images/carousel-5.png'


const OurWork = () => {
    let settings = {
        dots:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        dotsClass: "button__bar"
      };


    return (
        <section  className='mt-5 pt-5 mb-5 our-works-container'>
             <div className="text-center pt-5">
                <h2 style={{color:'#ffff'}} className='services-title'>Here are some of <span style={{color:' #7AB259'}}>our works</span></h2>
            </div>
            
            <div style={{height:'600px'}} className="d-flex align-items-center justify-content-center">
                <div className="w-75 mt-5 pt-5"> 
                <>
                <Slider {...settings}>
                    
                     </Slider>
                    </>
                </div>
            </div>
        </section>
    );
};

export default OurWork;