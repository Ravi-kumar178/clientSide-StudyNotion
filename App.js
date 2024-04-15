import "./App.css";
import {Route,Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";

import Navbar from "./Component/Common/Navbar";
import OpenRoute from "./Component/Auth/OpenRoute";

function App() {



  return (
    <div className=" w-screen h-screen overflow-x-hidden mx-auto bg-richblack-900">
      <Navbar/>
       <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/login" 
             element={
               <OpenRoute>
                   <Login/>
               </OpenRoute>
             }/>

          <Route path="/signup" element={
            <OpenRoute>
                <Signup/>
            </OpenRoute>
          }/>

       </Routes>
    </div>
  );
}

export default App;
