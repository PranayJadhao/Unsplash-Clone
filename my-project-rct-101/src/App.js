import logo from './logo.svg';
import './App.css';
import Navbar1 from "./components/Navbar/Navbar-1"
import Navbar2 from "./components/Navbar/Navbar-2"
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"


function App() {
  return (
    <div className="App">
    <br></br>
     <Navbar1></Navbar1>
     <br></br>
     {/* <Navbar2></Navbar2>
     <br></br>
     <Home></Home> */}
     {/* <Signup></Signup> */}
     <Login></Login>
    </div>
  );
}

export default App;
