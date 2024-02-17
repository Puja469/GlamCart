import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdminDashboard from './pages/admin/AdminDashboard';
import Login from './pages/Login';
import ManageCategory from './pages/admin/ManageCategory';
import ManageProduct from './pages/admin/ManageProduct';
import ManageUser from './pages/admin/ManageUser';
import Home from './pages/Home';
import Signup from './pages/Signup';

import Contact from './pages/Contact';





const queryClient = new QueryClient();
const App:React.FC = () => {
  
  return <Router>
    <QueryClientProvider client={queryClient}>
    <Routes>
      
      <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/ManageCategory" element={<ManageCategory/>}/>
      <Route path="/manageproduct" element={<ManageProduct/>}/>
      <Route path="/manageuser" element={<ManageUser/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
      

      

      



      








    </Routes>
    </QueryClientProvider>
  </Router>
    
  
};

export default App;