import "../../assets/css/admin/ManageOrder.css";
import {useLocation} from "react-router-dom";
import { FaSearch  } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar.tsx";
import React, {  useState } from "react";
import OrderData from "../../components/OrderData.tsx";
import { useQuery} from "@tanstack/react-query";


import 'react-toastify/dist/ReactToastify.css';


  
const ManageOrder: React.FC = () =>  {

    const[search, setSearch] = useState('');

    const location = useLocation(); 
    const currentLocation = location.pathname;

    const{refetch} = useQuery({
        queryKey:["GETDATA"],
        
    })
    

    return(
        <section>
            <div className={"manage-order-page"}>
                <div className={"order-left"} >
                    <AdminSidebar activePage={currentLocation} />
                </div>

                <div className={"order-right"}>
                    <header className={"order-header"}>
                        <h1>Manage Order</h1>

                        <div className={"search-wrapper5"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search Order"} value={search} onChange={(e)=> setSearch(e.target.value)}/>
                        </div>
                    </header>

                    <div className={"order-main-content"}>
                        <div className={"c-main-content"}>
                            <div className={"table-container5"}>
                                <div className={"ml-8 card-body5"}>
                                    <table className={"mt-2 w-full text-sm rounded-xl"}>
                                        <thead className={"h-10 text-white text-center bg-black rounded-xl"}>
                                        <tr>
                                            <th className={"pl-3"}>ID</th>
                                            <th className={"px-12"}>delivery_date</th>
                                            <th className={"px-2"}>delivery_time</th>
                                            <th className={"px-6"}>delivery_status</th>
                                            <th className={"px-4"}>Price</th>
                                            <th className={"px-4"}>Quantity</th>
                                            <th className={"px-5"}>productname</th>
                                            <th className={"px-5"}>user_id</th>
                                            <th className={"px-8"}>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <OrderData search={search}/>
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

export default ManageOrder;
