import React from 'react';

const CustomerServiceDetail = ({service}) => {
  
    let bgColor ='';

    if(service.status){
        bgColor = '#009444'
    }
    else{
        bgColor = '#FF4545'
    }
 
    const statuStyle = {
        height: '40px',
        backgroundColor:bgColor,
        color: bgColor,
        borderRadius:'2px',
        border:'none'
    }
    
    const divStyle = {
          background: '#FFFFFF',
          borderRadius: '20px'
    }


    return (
        <div className="col-md-4 pt-1">
            <div className="row">
              <div className="col-md-6">
                 <img src="" alt=""/>
                 <h6>{service.course}</h6>
              </div>
              <div className="col-md-4">
                    <div style={statuStyle} >
                        {service.status?'Done':'Pending'}
                    </div>
              </div>
              <p className='text-secondary'>{service.projectDetails}</p>
            </div>
        </div>
    );
};

export default CustomerServiceDetail;