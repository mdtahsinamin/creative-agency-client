import React from 'react';
import './LogoCard.css';
const LogoCard = ({provider}) => {
    return (
        <div className='col-md-2'>
            <img className='provider-img ml-2' src={provider.img} alt=""/>
        </div>
    );
};

export default LogoCard;