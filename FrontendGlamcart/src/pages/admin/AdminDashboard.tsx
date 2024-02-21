
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
                          <img src={"data:image/jpeg;base64,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"} width={"70px"} height={"70px"}  />
                          <div>
                              
                             
                          </div>
                      </div>
                  </header>

                  <div className={"dashboard-main-content"}>
                      <div className={"d-main-content"}>
                          
                      </div>
                  </div>

              </div>
          </div>
      </>

  )
}

export default AdminDashboard;
