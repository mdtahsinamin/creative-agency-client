import React from 'react';

const AllFeedbacks = ({feedBack}) => {
    return (
        <div className="card shadow-sm">
            <div className="d-flex align-items-center">
                <img className="mx-3 mt-2" src={feedBack.image} alt="" width="64"/>
                <div>
                    <h6 className="text-primary">{feedBack.name}</h6>
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