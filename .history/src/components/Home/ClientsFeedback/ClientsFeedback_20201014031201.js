import React from 'react';

import client1  from '../../../images/customer-1.png'
import client2  from '../../../images/customer-2.png'
import client3  from '../../../images/customer-3.png'
import AllFeedbacks from '../AllFeedbacks/AllFeedbacks';
const ClientsFeedback = () => {
    
    const feedBacks =[
        {
            id:1,
            name:'Nash Patrik',
            profession: 'CEO, Manpol',
            images:client1,
            quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            id:2,
            name:'Miriam Barron',
            profession: 'CEO, Manpol',
            images:client2,
            quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
            
        },
        {
            id:3,
            name:'Bria Malone',
            profession: 'CEO, Manpol',
            images:client3,
            quote:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        }
    ]

    
    return (
        <section className="services-container mt-5">
        <div className="text-center">
            <h2 className='service-title'>Clients <span style={{color:' #7AB259'}}>Feedback</span></h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 card-deck mt-5 pt-5">
            {
                feedBacks.map(feedBack =><AllFeedbacks feedBack={feedBack} key={feedBack.id}></AllFeedbacks>)
            }
        </div>
    </div>
    </section>
    );
};

export default ClientsFeedback;