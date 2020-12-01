import React from 'react';
import fakePriceList from '../../fakeData/fakePriceList';
import './Pricing.css';
const Pricing = () => {
  return (
    <section className='pricing'>
      <div className='container'>
        <h3 className='text-center my-5'>Choose Your Package</h3>
        <div className='row pricingRow'>
          {fakePriceList.map(price => (
            <div
              className='col-md-4 singlePrice d-flex flex-column align-items-center py-5'
              key={price.id}
              style={{ flex: '1 1 27%' }}>
              <h1 className='text-center text-dark'>{price.amount}</h1>
              <p className='text-center text-dark w-100'>{price.user}</p>
              {price.details.map((singleDetails, index) => (
                <p className='text-center my-3 text-dark w-100' key={index}>
                  {singleDetails}
                </p>
              ))}
              <button className='buttonElement'>Order Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
