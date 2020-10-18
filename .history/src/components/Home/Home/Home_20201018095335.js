import React, { useEffect } from 'react';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurWork from '../OurWork/OurWork';
import Services from '../Services/Services';
import SomeProvider from '../SomeProvider/SomeProvider';

const Home = () => {
    useEffect(()=>{
        const loginUserEmail = loginUser.email || loginUser.currentEmail;

        fetch('http://localhost:5200/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({loginUserEmail})
        }).then(response => response.json())
        .then(data => sessionStorage.setItem(data));

    },[])


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