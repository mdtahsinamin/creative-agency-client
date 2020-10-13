import React from 'react';

import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png';
import LogoCard from '../LogoCard/LogoCard';

const SomeProvider = () => {
    
    const providers =
    [
        {id:1,img:slack},
        {id:2,img:google},
        {id:3,img:uber},
        {id:4,img:netflix},
        {id:5,img:airbnb},
    ]
   


    return (
        <section className="d-flex justify-content-center mt-5">
              <div className="w-75 row">
                  {
                      providers.map(provider =><LogoCard provider={provider} key={provider.id}></LogoCard>)
                  }
              </div>
        </section>
    );
};

export default SomeProvider;