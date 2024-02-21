import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {  doLogout } from '../auth/authService';
import logo from '../../src/Images/logo1.png';

const header = () => {
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      doLogout();
      // Redirect to the login page after logout
      window.location.href = '/login';
    }
  };
  return (
    <>
      {/* <nav
        className='navbar navbar-expand-lg bg-dark navbar-light h-12 d-none d-lg-block'
        id='templatemo_nav_top'
      >
        <div className='container text-light'>
          <div className='w-full d-flex justify-content-between align-items-center'>
            <div>
              <i className='fa text-sm  fa-envelope mx-2'></i>
              <a
                className='navbar-sm-brand text-light text-sm text-decoration-none'
                href='mailto:info@company.com'
              >
               glamcart@me.com
              </a>
              <i className='fa text-sm  fa-phone mx-2'></i>
              <a
                className='navbar-sm-brand text-sm  text-light text-decoration-none'
                href='tel:9805953190'
              >
                9805953190
              </a>
            </div>
            <div>
              <a
                className='text-light'
                href='https://fb.com'
                target='_blank'
                rel='sponsored'
              >
                <i className='fab text-sm  fa-facebook-f fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://www.instagram.com/'
                target='_blank'
              >
                <i className='fab text-sm  fa-instagram fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://twitter.com/'
                target='_blank'
              >
                <i className='fab text-sm fa-twitter fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://www.linkedin.com/'
                target='_blank'
              >
                <i className='fab text-sm fa-linkedin fa-sm fa-fw'></i>
              </a>
            </div>
          </div>
        </div>
      </nav> */}

      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='white'
        className='shadow h-14'
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

              <Nav.Item as={NavLink} className=' nav-link' to='/contact'>
                <span>Contact</span>
              </Nav.Item>
            </div>
            {/* Right navigation */}

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
                    {/* {cartItems.length} */}
                  </span>
                </Link>
              </div>
              {/* {!userInfo ? ( */}
                <>
                  <div className='d-flex align-items-lg-center mt-3 mt-lg-0'>
                    <Nav.Link
                      as={NavLink}
                      to='/login'
                      className='btn btn-secondary btn-sm text-white me-3 ms-5 '
                    >
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
              {/* ) : ( */}
                {/* <NavDropdown
                  title={<i className='fa fa-fw fa-user text-dark mr-3'></i>}
                  id='basic-nav-dropdown'
                >
                  {userInfo.isAdmin && (
                    <NavDropdown.Item as={NavLink} to='/dashboard'>
                      Dashboard
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item
                    as={NavLink}
                    to={`/profile/${userInfo._id}`}
                  >
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              )} */}
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default header;
