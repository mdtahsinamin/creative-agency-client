import React from 'react';
import frame from '../../../images/logos/Frame.png'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
        <div className="col-md-4 offset-md-1">
            <h1 className='agency-title mb-4'>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
            <p className='agency-description mb-5'>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
            <button className='hireUs-btn'>Hire us</button>
        </div>
        <div className="col-md-6">
            <img style={{width: '624.6px',height: '422.8px'}} src={frame} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;