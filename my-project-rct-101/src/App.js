import logo from './logo.svg';
import './App.css';
import Navbar1 from "./components/Navbar/Navbar-1"
import Navbar2 from "./components/Navbar/Navbar-2"
import AllRoutes from './Pages/AllRoutes';


function App() {
  return (
    <div className="App">
    <br></br>
     <Navbar1></Navbar1>
     <br></br>
     <Navbar2></Navbar2>
     <br></br>
    <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
