import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './HeaderMain.css';
const HeaderMain = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <section className='header-main'>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-md-6 d-flex flex-column justify-content-center'>
            <h1 className='welcome-h1'>Welcome to K It</h1>
            <p className='welcome-p'>
              We Build Everything related to software Application. We provide
              Service About Web design, Web Development, Single-Page
              Application, Wordpress Etc.
            </p>
          </div>
          <div className='col-md-6'>
            <Form onSubmit={e => handleSubmit(e)} className='headerMainForm'>
              <h3>Sign Up Here</h3>
              <Form.Control type='name' placeholder='Enter Your Full-Name' />
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Control type='password' placeholder='Password' />
              <button className='buttonElement' type='submit'>
                Sign Up
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
