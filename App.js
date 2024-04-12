import "./App.css";
import {Route,Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Component/Auth/Login";
import Signup from "./Component/Auth/Signup";
import { useState } from "react";
import Navbar from "./Component/Common/Navbar";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=" w-screen h-screen overflow-x-hidden mx-auto bg-richblack-900">
      <Navbar/>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
          <Route path="/signup" element={<Signup/>}/>

       </Routes>
    </div>
  );
}

export default App;
