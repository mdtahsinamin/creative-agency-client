import React from 'react';
import Header from '../Header/Header';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';
import SomeProvider from '../SomeProvider/SomeProvider';

const Home = () => {
    return (
        <div>
             <Header></Header>
             <SomeProvider></SomeProvider>
             <Services></Services>
             <OurWork></OurWork>
        </div>
    );
};

export default Home;