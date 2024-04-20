import "./App.css";
import {Route,Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";

import Navbar from "./Component/Common/Navbar";
import OpenRoute from "./Component/Auth/OpenRoute";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import PrivateRoute from './Component/Auth/PrivateRoute'
import Dashboard from "./Pages/Dashboard";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useSelector } from "react-redux";
import MyProfile from "./Component/Dashboard/MyProfile";

function App() {

  const {user} = useSelector((state)=>state.auth);

  return (
    <div className=" w-screen h-screen overflow-x-hidden mx-auto bg-richblack-900">
      <Navbar/>
       <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/login" 
             element={
               
                   <Login/>
               
             }/>

          <Route path="/signup" element={
            
                <Signup/>
            
          }/>

          <Route path="/forgot-password" element={

              <ForgotPassword/>

          }
          />

          <Route path="/update-password/:id" element={
              <UpdatePassword/>
          }/>

          <Route path="/verify-email" element={
                <VerifyEmail/>
            } />

          <Route path="/contact" element={<Contact/>} /> 

          <Route path="/about" element= {<About/>}/> 
          
          <Route element={
            <PrivateRoute>
               <Dashboard/>
            </PrivateRoute>
          } >
            
           
             <Route path="/dashboard/my-profile" element={<MyProfile/>}/>
              
            

          </Route>

       </Routes>
    </div>
  );
}

export default App;
