import { LuLayoutDashboard} from "react-icons/lu";
import { TbCategoryPlus} from "react-icons/tb";
import {TiHome} from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import {IoIosLogOut} from "react-icons/io";
import {MdProductionQuantityLimits} from "react-icons/md";
import {Link} from "react-router-dom"
import React from "react";
import {MdAddShoppingCart} from "react-icons/md";
import '../../assets/css/AdminSidebar.css';



interface AdminSidebarProps {
    activePage: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activePage }) => {
    return(
        <>
            <div className={"admin-sidebar"}>
                <div className={"sidebar-brand"}>
                    <h1> <span><TiHome style={{fontSize:"2.1rem", marginBottom:"-4px", color:"black"}} /></span>GlamCart</h1>
                </div>

                <div className={"sidebar-options"}>
                    <ul className={"sidebar-list"}>
                        <Link to={"/AdminDashboard"}>
                            <li className={`sidebar-list-item ${activePage === "/AdminDashboard" ? "active" : ""}`}>
                                <span><LuLayoutDashboard style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                 Dashboard
                            </li>
                        </Link>

                        <Link to={"/ManageCategory"}>
                            <li className={`sidebar-list-item ${activePage === "/ManageCategory" ? "active" : ""}`}>
                                <span><TbCategoryPlus style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                 Category
                            </li>
                        </Link>

                        <Link to={"/manageproduct"}>
                            <li className={`sidebar-list-item ${activePage === "/manageproduct" ? "active" : ""}`}>
                                <span><MdProductionQuantityLimits style={{fontSize:"18px",marginBottom:"-3px"}}/></span>
                                 Products
                            </li>
                        </Link>
                        <Link to={"/manageorder"}>
                            <li className={`sidebar-list-item ${activePage === "/manageorder" ? "active" : ""}`}>
                                <span><MdAddShoppingCart style={{fontSize:"20px",marginBottom:"-3px"}}/></span>
                                Order
                            </li>
                        </Link>
                        <Link to={"/manageuser"}>
                            <li className={`sidebar-list-item ${activePage === "/manageuser" ? "active" : ""}`}>
                                <span><FaRegUser style={{fontSize:"20px",marginBottom:"-3px"}}/></span>
                                User
                            </li>
                            </Link>

                    </ul>
                </div>

                <div className={"sidebar-btn"}>
                    <button type={"button"}><span><IoIosLogOut style={{fontSize:"1.3rem" ,marginBottom:"-3px",marginRight:"3px"}}/></span>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar;