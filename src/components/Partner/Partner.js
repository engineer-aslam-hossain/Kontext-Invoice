import React from 'react';
import fakePartner from '../../fakeData/fakePartner';
import SinglePartner from '../SinglePartner/SinglePartner';

const Partner = () => {
  return (
    <section
      className='partner'
      style={{ background: 'white', padding: '5rem 0' }}>
      <div className='PartnerHeading d-flex flex-column align-items-center'>
        <h1 className='text-center mb-3' style={{ color: 'black' }}>
          Our Happy Clients
        </h1>
        <p className='text-center w-50' style={{ color: 'black' }}>
          some of our largest backers, who continue to work with us and are
          extremely satisfied with our service delivery, playing a major part in
          jumpstarting their respective business’ overall infrastructure.
        </p>
      </div>
      <div className='container d-flex justify-content-around align-items-center my-5 flex-wrap'>
        {fakePartner.map(partner => (
          <SinglePartner key={partner.id} partner={partner} />
        ))}
      </div>
    </section>
  );
};

export default Partner;
