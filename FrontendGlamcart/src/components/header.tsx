import React, { useState } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { isAuthenticated, doLogout } from '../auth/authService';
import logo from '../../src/Images/logo1.png';

const header:React.FC = () => {

  const [cartProducts, setCartProducts] = useState<any[]>([]);
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
     
      doLogout();
      localStorage.removeItem('cart');

      // Update the cart state in your component
      setCartProducts([]);
  
      
      window.location.href = '/login';
    }
  };
  
 const userName = localStorage.getItem('userName');

  return (
    <>
  

      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='white'
        className='shadow h-18'
      >
        <div className='container-xl'>
        
          <Navbar.Brand as={NavLink} to='/'>
            <img
              src={logo}
              className='avatar rounded me-lg-10'
              alt='Logo'
              style={{ height: '25px', width: 'auto' }}
            />
          </Navbar.Brand>
         
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          {/* Collapse */}
          <Navbar.Collapse id='responsive-navbar-nav'>
            {/* Nav */}
            <div className='navbar-nav me-lg-auto'>
              <Nav.Item
                as={NavLink}
                className=' nav-link active'
                to='/'
                aria-current='page'
              >
                <span>Home</span>
              </Nav.Item>
              <Nav.Item as={NavLink} className=' nav-link' to='/product'>
                <span>Product</span>
              </Nav.Item>

              
            </div>
           

            <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center'>
                <Link className='nav-link' to='/product'>
                  <i className='fa fa-fw fa-search text-dark me-2'></i>
                </Link>
                <Link
                  className='nav-icon position-relative text-decoration-none'
                  to='/cart'
                >
                  <i className='fa fa-fw fa-cart-arrow-down text-dark me-2 '></i>
                  <span
                    style={{ backgroundColor: '#e03a3c' }}
                    className='position-absolute top-0 left-100 translate-middle badge rounded-pill  text-white'
                  >
                    
                  </span>
                </Link>
              </div>
             
            
              {isAuthenticated() && userName ? (
                 <>
                 <div className='d-flex align-items-lg-center mt-3 mt-lg-0'>
                
                
                   <button className=' text-white bg-gray-600 rounded-3xl h-10 w-20' onClick={handleLogout}>
                     Logout
                   </button>
                   <span className="ml-2">Welcome, {userName}</span>
                 </div>
               </>
             ) : (
              <>
              <div className='d-flex align-items-lg-center mt-3 mt-lg-0'>
                <Nav.Link as={NavLink} to='/login' className='btn btn-secondary btn-sm text-white me-3 ms-5'>
                  Login
                </Nav.Link>
              </div>

              <div className='d-flex align-items-lg-center mt-3 mt-lg-0'>
                <Nav.Link
                  as={NavLink}
                  to='/register'
                  style={{ backgroundColor: '#FFC0CB' }}
                  className='btn btn-sm text-white  ms-xs-3 '
                >
                  Register
                </Nav.Link>
              </div>
            </>
          )}
        </div>
      </Navbar.Collapse>
    </div>
  </Navbar>
</>
);
};

export default header;
