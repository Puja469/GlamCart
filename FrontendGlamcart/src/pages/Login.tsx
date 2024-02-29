
import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Login.css';
import {  doLogin} from '../auth/authService';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../components/layouts/default-layout';





const Login: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8082/authenticate', credentials);

      if (response.status === 200) {
        const { token,userId,admin,userName} = response.data;

        localStorage.setItem("userId",userId);
        localStorage.setItem('userName', userName);
        
        doLogin(token,userId,userName);
        if (admin) {
          
          navigate('/AdminDashboard');
        } else {
          
          navigate('/');
        }

        window.alert('Login successful');
      }
    } catch (err) {
      window.alert('Invalid username and password');
    }
  };

  const handleForgotPassword = () => {
    window.alert('Redirecting to Forgot Password page');
  };

  return (
    <DefaultLayout >
  
    <div className="login-container" >
       
     
      <h2 className="user-login-header">Login</h2>
      <form className="user-login-form" onSubmit={handleLogin}>
        <label htmlFor="email" className="user-login-label">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
          className="user-login-input"
        />

        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="user-login-input"
        />

        <button type="submit" className="user-login-button">
          Login
        </button>
      </form>

      <p className="user-login-forgot-password">
        <a href="#" onClick={handleForgotPassword}>
          Forgot Password?
        </a>
      </p>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    
      
    </div>
    </DefaultLayout>
  );
};

export default Login;
