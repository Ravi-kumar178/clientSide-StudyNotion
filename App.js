import "./App.css";
import {Route,Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden mx-auto bg-richblack-900">
       <Routes>
          <Route path="/" element={<HomePage/>}/>
       </Routes>
    </div>
  );
}

export default App;
