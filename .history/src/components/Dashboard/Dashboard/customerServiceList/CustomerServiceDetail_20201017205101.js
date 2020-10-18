import React from 'react';
import './CustomerServiceDetail.css';
const CustomerServiceDetail = ({service}) => {
  
    const divStyle = {
          background: '#FFFFFF',
          borderRadius: '20px',
    }


    return (
        <div style={divStyle} className="col-md-4 pt-1">
             <div className="mr-1">
             <div className="row">
              <div className="col-md-6 pr-5">
                 <img style={{height:'74px'}} className='img-fluid rounded-circle' src={`data:image/jpeg;base64,${service.image.img}`} alt=""/>
              </div>
              <div className="col-md-6">
                      <div className={service.status==='true'?'done-label':'pending-label'}>
                      <input type="" name="image" id="file" className='empty-file'/>
                                <label htmlFor="file">
                                 <span>{service.status==='true'?'Done':'Pending'}</span>
                            </label>
                      </div>
              </div>
            </div>
            <h6 className="pt-2">{service.course}</h6>
            <p className='text-secondary pt-1'>{service.projectDetails}</p>
            </div>
        </div>
    );
};
//img-fluid w-25 rounded-circle
export default CustomerServiceDetail;