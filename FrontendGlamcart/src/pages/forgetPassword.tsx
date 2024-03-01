import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import Header from "../components/header.tsx";
import Footer from "../components/Footer/Footer.tsx";

const ForgetPassword = () =>{

    const{register,
        handleSubmit,
        formState,
        reset} = useForm();
    const {errors} = formState;

    return(
        <>
            <Header/>
            <div className={"login-main-div flex w-full h-screen pt-8 justify-between bg-white px-10"}>
                <div className="md:w-9/12 h-[82%] relative bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6565812.jpg')", borderRadius: "15%" }}>
                </div>
                <form className={"w-full md:w-6/12 h-[82%]  flex justify-center items-center flex-col"}>
                    <h1 className={"text-3xl font-bold mb-1 flex"}>Forgot Password?</h1>
                    <div className={"md:w-6/12 w-11/12 mt-8"}>
                        <h1 className={"text-xs pl-2 text-gray-500"}>Email</h1>
                        <div className={"h-12 border-solid border rounded-2xl border-gray-300 flex items-center pl-4 pr-2"}>
                            <input type={"text"} className={"w-full outline-none"} {...register("email",{required:"Email is required"})}/>
                        </div>
                        <h6 className={"md:w-5/12 w-11/12 flex text-gray-500 text-xs"}>{errors?.email?.message}</h6>
                    </div>
                    <button className={"mt-10 md:w-6/12 w-11/12 rounded-2xl h-12 bg-pink-700 text-white text-lg font-normal transition duration-200 ease-in-out hover:bg-white hover:text-black hover:font-semibold border-2 border-black"}>
                        Reset Password
                    </button>
                    <div className={"md:w-6/12 w-11/12 flex justify-center pt-3 pr-1"}>
                        <h3 className={"text-gray-500"}>Take me back to</h3>
                        <Link to={"/Login"}><h3 className={"text-pink-900 ml-1 cursor-pointer transition-all"}>Sign in</h3></Link>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default ForgetPassword;