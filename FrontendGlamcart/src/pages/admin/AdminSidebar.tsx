import { LuLayoutDashboard} from "react-icons/lu";
import {TbCategoryPlus, TbLogout2} from "react-icons/tb";
import {TiHome} from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import {IoIosLogOut} from "react-icons/io";
import {MdProductionQuantityLimits} from "react-icons/md";
import {Link} from "react-router-dom"
import React from "react";
import {MdAddShoppingCart} from "react-icons/md";
import '../../assets/css/admin/AdminSidebar.css';


interface AdminSidebarProps {
    activePage: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activePage }) => {

    const userName = localStorage.getItem('userName');
    return(
        <>
            <div className={"admin-sidebar"}>
                <div className={"sidebar-brand flex flex-col justify-center"}>
                   <img src={"/src/Images/logo1.png"} alt={"GlamCart Logo"} style={{ marginLeft: "5px", height: "22px", width: "auto" }} />
                    <p className={"text-xs text-gray-300 mt-1"}>Welcome, {userName}</p>
                </div>
                <div className={"user-info"}>

                </div>
                <div className={"sidebar-options"}>
                    <ul className={"sidebar-list"}>
                        <Link to={"/AdminDashboard"}>
                            <li className={`sidebar-list-item ${activePage === "/AdminDashboard" ? "active" : ""}`}>
                                <span><LuLayoutDashboard style={{fontSize:"18px",marginRight:"2px"}}/></span>
                                 Dashboard
                            </li>
                        </Link>

                        <Link to={"/ManageCategory"}>
                            <li className={`sidebar-list-item ${activePage === "/ManageCategory" ? "active" : ""}`}>
                                <span><TbCategoryPlus style={{fontSize:"18px",marginRight:"2px"}}/></span>
                                 Category
                            </li>
                        </Link>

                        <Link to={"/manageproduct"}>
                            <li className={`sidebar-list-item ${activePage === "/manageproduct" ? "active" : ""}`}>
                                <span><MdProductionQuantityLimits style={{fontSize:"18px",marginRight:"2px"}}/></span>
                                 Products
                            </li>
                        </Link>
                        <Link to={"/manageorder"}>
                            <li className={`sidebar-list-item ${activePage === "/manageorder" ? "active" : ""}`}>
                                <span><MdAddShoppingCart style={{fontSize:"18px",marginRight:"2px"}}/></span>
                                Order
                            </li>
                        </Link>
                        <Link to={"/manageuser"}>
                            <li className={`sidebar-list-item ${activePage === "/manageuser" ? "active" : ""}`}>
                                <span><FaRegUser style={{fontSize:"16px",marginRight:"2px"}}/></span>
                                User
                            </li>
                            </Link>

                    </ul>
                </div>

                {/*<div className={"sidebar-btn flex justify-center"}>*/}
                {/*    <button onClick={()=>{*/}
                {/*        localStorage.clear();*/}
                {/*        window.location.href="/"*/}
                {/*    }}*/}
                {/*    type={"button"}><IoIosLogOut style={{fontSize:"1.3rem" ,marginBottom:"-3px",marginRight:"3px"}}/>LogOut</button>*/}
                {/*</div>*/}
                <div className={"sidebar-btn-div flex justify-center"}>
                    <div onClick={()=>{
                        localStorage.clear();
                        window.location.href="/"
                    }} className={"sidebar-btn backdrop-blur-3xl flex"}>
                        <h1 className={"gilroy-semibold mr-1"}> Logout </h1>
                        <span><TbLogout2 style={{fontSize:"1.6rem"}}/></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar;