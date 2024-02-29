
import "../../assets/css/admin/ManageUser.css";
import {useLocation} from "react-router-dom";
import { FaSearch  } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar.tsx";
import React, {  useState } from "react";
import CustomerData from "../../components/CustomerData.tsx";
import { useQuery} from "@tanstack/react-query";



import 'react-toastify/dist/ReactToastify.css';


  
const ManageUser: React.FC = () =>  {

    const[search, setSearch] = useState('');

    const location = useLocation(); 
    const currentLocation = location.pathname;

    const{refetch} = useQuery({
        queryKey:["GETDATA"],
        
    })
    

    return(
        <section>
            <div className={"manage-user-page"}>
                <div className={"user-left"} >
                    <AdminSidebar activePage={currentLocation} />
                </div>

                <div className={"user-right"}>
                    <header className={"user-header"}>
                        <h1>Manage User</h1>

                        <div className={"search-wrapper4"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search User"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                        </div>
                    </header>

                    <div className={"user-main-content ml-10 flex justify-center"}>
                        <table className={"w-10/12 text-lg text-center rounded-xl "}>
                            <thead className={"h-12 text-white bg-black rounded-xl gilroy-semibold"}>
                                <tr>
                                    <th className={"pl-4"}> ID</th>
                                    <th className={"px-10"}>Full Name</th>

                                    <th className={"px-20"}>Email</th>
                                    <th className={"px-10"}>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CustomerData search={search}/>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default ManageUser;
