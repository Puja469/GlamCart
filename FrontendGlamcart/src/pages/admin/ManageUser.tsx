


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

                        <div className={"search-wrapper2"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search User"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                        </div>

                        <div className={"user-wrapper2"}>
                            <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                            <div>
                                <h4>Admin</h4>
                                <small>Super admin</small>
                            </div>
                        </div>
                    </header>

                    <div className={"user-main-content"}>
                        <div className={"c-main-content"}>
                            

                            <div className={"table-container2"}>
                                <div className={"card-header2"}>
                                    <h2>Users</h2>
                                </div>
                                <div className={"card-body2"}>
                                    <table className={"table-bordered2"}>
                                        <thead>
                                        <tr className="table-userbox">
                                            <th className={"id-box2"}>ID</th>
                                            <th className={"name-box2"}>firstName</th>
                                            <th className={"name-box2"}>lastName </th>
                                            <th className={"name-box2"}>userName </th>
                                            <th className={"name-box2"}>email </th>
                                           
                            
                                            <th className={"delete-box2"}>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <CustomerData search={search}/>
                                       
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </section>
                    

  );
};

export default ManageUser;
