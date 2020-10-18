import React from 'react';
import './AllFeedback.css';
const AllFeedbacks = ({feedBack}) => {
    return (
        <div className="col-md-4 feedback mb-2">
             <div className="d-flex">
              <img className="mx-4 mt-3 img-fluid rounded-circle user-img" src={feedBack.photoUrl} alt="" width="50"/>
               <div className='user-information'>
               <h6 className="text-primary mt-2">{feedBack.name}</h6>
                <h6 style={{color:'black'}}  className="m-0">{feedBack.companyName}</h6>
               </div>
             </div>
            <p className="text-center text-secondary mx-3">{feedBack.description}</p>
        </div>
    );
};

export default AllFeedbacks;
