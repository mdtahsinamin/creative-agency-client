import React from 'react';

const LogoCard = ({provider}) => {
    return (
        <div className='col-md-2'>
            <img src={provider.img} alt=""/>
        </div>
    );
};

export default LogoCard;