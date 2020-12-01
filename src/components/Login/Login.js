import React, { useContext, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import google from '../../images/google.png';
import './Login.css';
import { UserContext } from '../../App';

import {
  googleSignInHandler,
  initializedFirebase,
  signInWithEmail,
  createUserWithEmail,
} from './LoginManager';

initializedFirebase();

const Login = () => {
  const [User, SetUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    error: '',
    success: '',
  });

  /////////****************/////////
  const [newUser, SetNewUser] = useState(false);
  const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);
  const location = useLocation();
  const LoginHistory = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };

  const haldleInput = e => {
    e.preventDefault();
    let isInputValid;

    if (e.target.name === 'name') {
      const nameValidation = /^([a-zA-Z]{3,30}\s*)+/;
      isInputValid = nameValidation.test(e.target.value);

      !isInputValid &&
        document.querySelector('.name').style.setProperty('display', 'block');
    }
    if (e.target.name === 'phone') {
      isInputValid = e.target.value.length > 10 ? e.target.value : '';
      !isInputValid &&
        document.querySelector('.phone').style.setProperty('display', 'block');
    }
    if (e.target.name === 'email') {
      const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isInputValid = validation.test(e.target.value);
      !isInputValid &&
        document.querySelector('.email').style.setProperty('display', 'block');
    }
    if (e.target.name === 'password') {
      const passValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      isInputValid = passValidation.test(e.target.value);
      !isInputValid &&
        document
          .querySelector('.password')
          .style.setProperty('display', 'block');
    }
    if (isInputValid) {
      const newUser = { ...User };
      newUser[e.target.name] = e.target.value;
      SetUser(newUser);
    }
  };
  ///////// update  user ///////////////////

  ///////// create  user ///////////////////
  const buttonHandler = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (User.email && User.password) {
      createUserWithEmail(User.email, User.password)
        .then(res => {
          SetUser(res);
        })
        .catch(err => {
          SetUser(err);
        });
    }
    e.target.reset();
  };
  ///////// sign in  user ///////////////////
  const submitHandler = e => {
    e.preventDefault();

    if (User.email && User.password) {
      signInWithEmail(User.email, User.password)
        .then(res => {
          handleResponse(res, true);
        })
        .catch(err => {
          SetUser(err);
        });
    }
    e.target.reset();
  };

  ///////// sign in with google  ///////////////////

  const googleSignIn = e => {
    e.preventDefault();
    googleSignInHandler()
      .then(user => {
        handleResponse(user, true);
      })
      .catch(errMsg => {
        const createUserError = { ...User };
        createUserError.error = errMsg;
        createUserError.success = '';
        SetUser(createUserError);
      });
  };
  /////////// redirect setting /////////
  const handleResponse = (res, redirect) => {
    SetUser(res);
    SetLoggedInUser(res);
    if (redirect === true) {
      LoginHistory.replace(from);
    }
  };
  return (
    <section className='login'>
      <Header />
      <Card className='loginCard mx-auto p-4 mt-3'>
        <h3 className='text-center text-success'>
          {User.success && User.success}
        </h3>
        <h3 className='text-center text-danger'>{User.error && User.error}</h3>
        <Form
          className='d-flex flex-column'
          noValidate
          onSubmit={newUser ? buttonHandler : submitHandler}>
          <Form.Group controlId='formBasicText'>
            {newUser && (
              <Form.Control
                name='name'
                type='text'
                placeholder='Enter Full Name'
                onBlur={haldleInput}
                required
              />
            )}
            <Form.Control.Feedback type='invalid' className='name'>
              {!User.name ? 'name must be start with atleast 3 character' : ''}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formBasicPhone'>
            {newUser && (
              <Form.Control
                onBlur={haldleInput}
                type='number'
                name='phone'
                placeholder='Your Phone'
                required
              />
            )}
            <Form.Control.Feedback type='invalid' className='phone'>
              {!User.phone ? 'must have atleast 11 number' : ''}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              onBlur={haldleInput}
              required
            />
            <Form.Control.Feedback type='invalid' className='email'>
              {!User.email ? 'please provide an valid email' : ''}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Control
              type='password'
              name='password'
              placeholder='Password'
              onBlur={haldleInput}
              required
            />
            <Form.Control.Feedback type='invalid' className='mb-3 password'>
              {!User.password
                ? 'must have minimum 6 character with number'
                : ''}
            </Form.Control.Feedback>
          </Form.Group>
          <button className='buttonElement' type='submit'>
            {newUser ? 'Create an Account' : 'Login'}
          </button>
        </Form>
        <div className='d-flex mt-3 mx-auto'>
          <span className='text-dark'>
            {!newUser ? "Don't have an account ?" : 'Already have an account ?'}
          </span>
          <button
            className='createAccount'
            onClick={() => SetNewUser(!newUser)}>
            {!newUser ? 'Create an Account' : 'Login'}
          </button>
        </div>
      </Card>
      <div className='d-flex flex-column   otherLogin mx-auto'>
        <p className='my-2 mx-auto text-white'>or</p>
        <button
          className='buttonElement d-flex align-items-center justify-content-between'
          onClick={googleSignIn}>
          <img src={google} alt='' /> Continue With Google
        </button>
      </div>
    </section>
  );
};

export default Login;
