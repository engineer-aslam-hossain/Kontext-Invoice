import React from 'react';
import './SingleService.css';
const SingleService = ({ service }) => {
  return (
    <div className='col-md-4 service d-flex flex-column justify-content-center align-items-center'>
      <img
        src={service.img || `data:image/png;base64,${service.image.img}`}
        alt=''
      />
      <h5>{service.name} </h5>
      <p className='text-center w-100'>{service.details} </p>
    </div>
  );
};

export default SingleService;
