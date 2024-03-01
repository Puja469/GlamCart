import React, {useState} from 'react';
import axios from 'axios';
import '../assets/css/Login.css';
import {doLogin} from '../auth/authService';
import {Link, useNavigate} from 'react-router-dom';
import Header from "../components/header.tsx";
import Footer from "../components/Footer/Footer.tsx";


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


  return (
    <>
      <Header/>
      <div className={"flex w-full h-screen pt-8 px-10 bg-white justify-between"}>
        <div className="md:w-8/12 h-[82%] relative bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6565812.jpg')", borderRadius: "15%" }}>
        </div>
        <form className={"w-full md:w-6/12 h-[82%] flex justify-center items-center flex-col"} onSubmit={handleLogin}>
          <h1 className={"text-3xl font-bold mb-1 flex"}>Login</h1>
          <div className={"md:w-6/12 w-11/12  mt-4 "}>
            <h1 className={"text-xs pl-2 text-gray-500"}>Email</h1>
            <div className={"h-12 border-solid border rounded-2xl border-gray-300 flex items-center pl-4 pr-2"}>
              <input type="text" id="email" name="email" value={credentials.email} onChange={handleChange} required className={"w-full outline-none"}/>
            </div>
          </div>
          <div className={"md:w-6/12 w-11/12 mt-4"}>
            <h1 className={"text-xs pl-2 text-gray-500"}>Password</h1>
            <div className={" h-12 border-solid border rounded-2xl border-gray-300 flex items-center pl-4 pr-2"}>
              <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required className={"w-full outline-none"}/>
            </div>
          </div>
          <div className={"md:w-6/12 w-11/12 flex justify-end pt-3 pr-1"}>
            <Link to={"/forgetpassword"}><h3 className={"text-gray-500 cursor-pointer transition-all hover:text-black"}>Forgot password?</h3></Link>
          </div>
          <button className={"mt-8 md:w-6/12 w-11/12 rounded-2xl h-12 bg-pink-700 text-white text-lg font-normal transition duration-200 ease-in-out hover:bg-white hover:text-black hover:font-semibold border-2 border-black"} type={"submit"}>
            Login
          </button>
          <div className={"md:w-6/12 w-11/12 flex justify-center pt-3 pr-1"}>
            <h3 className={"text-gray-500"}>Don't have an account? </h3>
            <Link to={"/register"}><h3 className={"text-pink-800 ml-1 cursor-pointer transition-all"}>Register</h3></Link>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
