import React from 'react';

const AllFeedbacks = ({feedBack}) => {
    return (
        <div className="card shadow-sm">
            <div className="d-flex align-items-center">
                <img className="mx-4 mt-3" src={feedBack.image} alt="" width="64"/>
                <div>
                    <h6 className="text-primary mt-3">{feedBack.name}</h6>
                    <p className="m-0">{feedBack.profession}</p>
                </div>
            </div>
            <div className="card-body">
               <p className="card-text text-secondary mx-3">{feedBack.quote}</p>
            </div>
       </div>
    );
};

export default AllFeedbacks;