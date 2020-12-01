import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import { UserContext } from '../../App';
const Header = () => {
  const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);
  return (
    <header className='header '>
      <div className='container px-0'>
        <Navbar expand='lg'>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} alt='' className='logo img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav '>
            <Nav className='ml-auto justify-content-center align-items-center'>
              <Link to='/'>Home</Link>
              <Link to='/service'>Service</Link>
              <Link to='/dashboard'>Dashboard</Link>
              <Link
                to='/login'
                className='buttonElement'
                onClick={LoggedInUser.email ? () => SetLoggedInUser('') : null}>
                {LoggedInUser.email ? 'Logout' : 'Login'}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
