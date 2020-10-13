import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import SomeProvider from '../SomeProvider/SomeProvider';

const Home = () => {
    return (
        <div>
             <Header></Header>
             <SomeProvider></SomeProvider>
             <Services></Services>
        </div>
    );
};

export default Home;