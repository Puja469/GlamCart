import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/Signup.css';

const Signup: React.FC = () => {
  const [registered, setRegistered] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await axios.post('http://localhost:8080/user/save', {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        userName: formData.get('userName'), 
        email: formData.get('email'),
        password: formData.get('password'),
        
      });

      if (response.status === 200) {
        setRegistered(true);

        toast.success('Registration Successful! Welcome to our community!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        console.error('Registration failed:', response.data);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div>
      <Header />

      <div className="glass-signup-section">
        <div className="glass-signup-content">
          {registered ? (
            <div className="success-message">
              <h2>Registration Successful!</h2>
              <p>Welcome to our community!</p>
            </div>
          ) : (
            <form className="signup-form" onSubmit={handleSignup}>
              <div className="form-group">
                <div className="column">
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="column">
                  <label htmlFor="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" />
                </div>
              </div>
              <div className="form-group">
                <div className="column">
                  <label htmlFor="userName">UserName:</label>
                  <input type="text" id="username" name="userName" />
                </div>
                <div className="column">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
              <div className="form-group">
                <div className="column">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" />
                </div>
                
              </div>
              <button type="submit">Sign Up</button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

