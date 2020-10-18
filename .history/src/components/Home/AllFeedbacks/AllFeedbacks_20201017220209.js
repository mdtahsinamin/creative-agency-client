import React from 'react';

const AllFeedbacks = ({feedBack}) => {
    return (
        <div className="card shadow-sm">
            <div className="d-flex align-items-center">
                <img className="mx-4 mt-3 img-fluid rounded-circle" src={feedBack.photoUrl} alt="" width="64"/>
                <div>
                    <h6 className="text-primary mt-3">{feedBack.name}</h6>
                    <p style={{color:'black'}}  className="m-0">{feedBack.companyName}</p>
                </div>
            </div>
            <div className="card-body">
               <p className="card-text text-secondary mx-3">{feedBack.description}</p>
            </div>
       </div>
    );
};

export default AllFeedbacks;