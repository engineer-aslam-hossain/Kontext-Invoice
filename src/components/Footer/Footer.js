import React from 'react';
import fakeFooterData from '../../fakeData/fakeFooterData';
import fakeSocialImg from '../../fakeData/fakeSocialImg';
import logo from '../../images/logo.png';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <div className='container'>
        <div className='col-md-7 mx-auto d-flex flex-column align-items-center'>
          <h3>Get your design right, right now</h3>
          <p>Be the first know our latest offers and updates!</p>
          <div className='mt-4 d-flex justify-content-center align-items-center'>
            <input type='text' className='subscribeInput' />
            <button className='contactBtn'>Get Started</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 d-flex flex-column footerLeft justify-content-center align-items-center'>
            <img src={logo} alt='' className='img-fluid footerLogo' />

            <div className='imgV d-flex '>
              {fakeSocialImg.map(image => (
                <img
                  src={image.img}
                  alt=''
                  key={image.id}
                  className='img-fluid socialImg'
                />
              ))}
            </div>
          </div>
          <div className='col-md-8 d-flex flex-wrap'>
            {fakeFooterData.map(singleData => (
              <div className='col-md-4 rightFooterDiv' key={singleData.id}>
                {singleData.details.map((data, index) => (
                  <a href='#' key={index}>
                    {<p className='footerRightP'>{data}</p>}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className='text-center'>
          &copy;{new Date().getFullYear()} All Right Reserve to Aslam Hossain
        </p>
      </div>
    </footer>
  );
};

export default Footer;
