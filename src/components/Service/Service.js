import React from 'react';
import fakeServices from '../../fakeData/fakeServices';
import SingleService from '../SingleService/SingleService';
import './Service.css';
const Service = () => {
  return (
    <section
      className='serviceSection'
      id='service'
      style={{ padding: '5rem 0' }}>
      <div className='container'>
        <h3
          className='text-center'
          style={{ fontWeight: '700', fontSize: '36px', marginBottom: '5rem' }}>
          Provide Awesome <span style={{ color: '#ffff3f' }}>Services</span>{' '}
        </h3>
        <div className='row justify-content-around'>
          {fakeServices.map(service => (
            <SingleService key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
