import React from 'react';
import './AllFeedback.css';
const AllFeedbacks = ({feedBack}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-body d-flex align-items-center">
             <img className="mx-4 mt-3 img-fluid rounded-circle" src={feedBack.photoUrl} alt="" width="50"/>
              <div>
              <h6 className="text-primary mt-1">{feedBack.name}</h6>
                    <p style={{color:'black'}}  className="m-0">{feedBack.companyName}</p>
              </div>
            </div>
            <div className="card-footer d-flex  align-items-center">
            <p className="card-text text-secondary mx-3">{feedBack.description}</p>
            </div>
       </div>
    );
};

export default AllFeedbacks;



