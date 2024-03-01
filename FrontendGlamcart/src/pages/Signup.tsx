import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/Signup.css';
import {Link} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {useForm} from "react-hook-form";

import {BiMessageSquareError} from "react-icons/bi";


const Signup: React.FC = () => {
  const{register,
    handleSubmit,
    formState,
    reset} = useForm();
  const {errors} = formState;

  const useApiCall = useMutation({
    mutationKey:["POST_USER_DATA"],
    mutationFn:(payload)=>{
      return axios.post("http://localhost:8082/user/save",payload)
    },onSuccess:()=>{
      reset();
      window.location.href = '/Login';
    }
  })

  const onSubmit=(value:any)=>{
    useApiCall.mutate(value)
  }


  return (
    <>
      <Header />
      <div className={"flex w-full h-screen pt-8 px-10 bg-white justify-between"}>
        <div className="md:w-8/12 h-[82%] relative bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6566160.jpg')", borderRadius: "15%" }}>
        </div>
        <form className={"w-full md:w-6/12 h-[82%] flex justify-center items-center flex-col"} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={"text-3xl font-bold mb-1 flex"}>Register</h1>
          <div className={"md:w-6/12 w-11/12 mt-6 "}>
            <h1 className={"text-xs pl-2 text-gray-500"}>Full Name</h1>
            <div className={" h-12 border-solid border rounded-2xl border-gray-300 flex items-center pl-4 pr-2"}>
              <input type={"text"} className={"w-full outline-none"} {...register("fullName",{required:"Full Name is required"})}/>
            </div>
            <h6 className={"md:w-5/12 w-11/12 flex text-gray-500 text-xs"}>{errors?.fullName?.message}</h6>
          </div>
          <div className={"mt-4 md:w-6/12 w-11/12 "}>
            <h1 className={"text-xs pl-2 text-gray-500"}>Username</h1>
            <div className={"h-12 border-solid border rounded-2xl border-gray-300  flex items-center pl-4 pr-2"}>
              <input type={"text"} className={"w-full outline-none"} {...register("userName",{required:"userName is required"})}/>
            </div>
            <h6 className={"md:w-5/12 w-11/12 flex text-gray-500 text-xs"}>{errors?.userName?.message}</h6>
          </div>
          <div className={"md:w-6/12 w-11/12  mt-4 "}>
            <h1 className={"text-xs pl-2 text-gray-500"}>Email</h1>
            <div className={"h-12 border-solid border rounded-2xl border-gray-300 flex items-center pl-4 pr-2"}>
              <input type={"text"} className={"w-full outline-none"}
                     {...register("email",{required:"Email is required",
                       pattern: {
                         value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                         message: "Invalid email address"
                       }})}/>
            </div>
            {errors?.email && (<h6 className={"md:w-5/12 w-11/12 flex text-gray-500 text-xs"}>
              <BiMessageSquareError style={{ marginRight: "0.1rem",marginTop:"0.1rem"}} />{errors?.email?.message}
            </h6>)}
          </div>
          <div className={"md:w-6/12 w-11/12 mt-4"}>
            <h1 className={"text-xs pl-2 text-gray-500"}>Password</h1>
            <div className={" h-12 border-solid border rounded-2xl border-gray-300 flex items-center pl-4 pr-2"}>
              <input type={"password"} placeholder={""} className={"w-full outline-none"}
                     {...register("password",{required:"Password is required",minLength: {
                         value: 4,
                         message: "Password must be at least 4 characters long"
                       }})}/>
            </div>
            <h6 className={"md:w-5/12 w-11/12 flex text-gray-500 text-xs"}>{errors?.password?.message}</h6>
          </div>
          <button className={"mt-8 md:w-6/12 w-11/12 rounded-2xl h-12 bg-pink-700 text-white text-lg font-normal transition duration-200 ease-in-out hover:bg-white hover:text-black hover:font-semibold border-2 border-black"} type={"submit"}>
            Create Account
          </button>
          <div className={"md:w-6/12 w-11/12 flex justify-center pt-3 pr-1"}>
            <h3 className={"text-gray-500"}>Already have an account? </h3>
            <Link to={"/Login"}><h3 className={"text-pink-800 ml-1 cursor-pointer transition-all"}>Login</h3></Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;

