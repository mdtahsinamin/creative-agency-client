import React from 'react';
import NavigationBar from '../../Share/NavigationBar/NavigationBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <NavigationBar></NavigationBar>
            <HeaderMain></HeaderMain>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,320L1440,32L1440,320L0,320Z"></path></svg>
        </div>
    );
};

export default Header;