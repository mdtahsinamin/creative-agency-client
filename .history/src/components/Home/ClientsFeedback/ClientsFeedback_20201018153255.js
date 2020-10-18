import React, { useEffect, useState } from 'react';
import Loader from '../../Share/Loader/Loader';
import AllFeedbacks from '../AllFeedbacks/AllFeedbacks';
const ClientsFeedback = () => {
    
   
    const [feedBacks,setFeedBacks] = useState([]);

    useEffect(()=>{
        
        async function loadData() {
             const request = await fetch('https://whispering-eyrie-37325.herokuapp.com/allReviews')

             return request;
        }

        loadData().then(res => res.json())
        .then(data =>setFeedBacks(data))

    },[])

    
    return (
        <section className="services-container mt-5 pt-5 mb-5 pb-5">
        <div className="text-center">
            <h2 className='service-title'>Clients <span style={{color:' #7AB259'}}>Feedback</span></h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 card-deck mt-5 pt-5 mb-5 pb-5 row">
            {
                feedBacks.length ===0 ? <Loader></Loader>:
                feedBacks.map(feedBack => <AllFeedbacks feedBack={feedBack} key={feedBack._id}></AllFeedbacks>)
            }
        </div>
    </div>
    </section>
    );
};

export default ClientsFeedback;