
import {useLocation} from "react-router-dom";
import { FaSearch  } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar.tsx";
import '../../assets/css/AdminDashboard.css';
  
function AdminDashboard(){

  const location = useLocation(); 
  const currentLocation = location.pathname;

  return(
      <>
          <div className={"admin-dashboard-page"}>
              <div className={"dashboard-left"} >
                  <AdminSidebar activePage={currentLocation} />
              </div>

              <div className={"dashboard-right"}>
                  <header className={"dashboard-header"}>
                      <h1>Dashboard</h1>

                      <div className={"search-wrapper"}>
                          <span><FaSearch /></span>
                          <input type={"search"} placeholder={"Search here"}/>
                      </div>

                      <div className={"user-wrapper"}>
                          <img src={"https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"} width={"40px"} height={"40px"} alt={"N"}/>
                          <div>
                              <h4>Admin</h4>
                              <small>Super admin</small>
                          </div>
                      </div>
                  </header>

                  <div className={"dashboard-main-content"}>
                      <div className={"d-main-content"}>
                          dfdf
                      </div>
                  </div>

              </div>
          </div>
      </>

  )
}

export default AdminDashboard;
