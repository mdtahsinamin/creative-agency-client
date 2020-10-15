import React from 'react';

const CarouelImg = ({carousel}) => {
     
    const style ={
        backgroundImage:`url(${carousel.url})`,
        borderRadius: '20px',
        border:'none',
        backgroundRepeat:'no-repeat',
    }
    return (
        <div style={style}>
            
        </div>
    );
};

export default CarouelImg;