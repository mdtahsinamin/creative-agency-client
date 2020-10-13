import React from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
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
             <ClientsFeedback></ClientsFeedback>
             <Footer></Footer>
        </div>
    );
};

export default Home;