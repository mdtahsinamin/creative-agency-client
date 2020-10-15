import React from 'react';
import agencyLogo from '../../../images/logos/logo.png'
const ExtraAppBar = () => {
    
    const style={
        position: 'absolute',
        width: '150px',
        height: '47px',
        left: '645px',
        top: '81px'
  }
    return (
        <div className="container">
            <Link to='/home'><img style={style} src={agencyLogo} alt=""/></Link>
        </div>
    );
};

export default ExtraAppBar;