import React from 'react';
import NavigationBar from '../../Share/NavigationBar/NavigationBar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div className='header-container'>
            <NavigationBar></NavigationBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;