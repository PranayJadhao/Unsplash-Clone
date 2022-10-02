import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Nature from "../Pages/Nature"
import Wallpaper from "../Pages/Wallpaper"
import Fashion from "../Pages/Fashion"
import Editorials from "./Editorials";


import PageNotFound from "../Pages/NotFoundPage";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/fashion"
        element={
        
            <Fashion />
    
        }
      ></Route>
      <Route
        path="/Wallpaper"
        element={
          
            <Wallpaper />
    
        }
      ></Route>
        <Route
        path="/Nature"
        element={
          
            <Nature />
    
        }
      ></Route>
      <Route
        path="/explore"
        element={
          
            <Editorials />
    
        }
      ></Route>
      {/* /users/anything */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
