import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Navbar from './components/Navbar';
import './App.css';
import Content from "./components/Content";


function App() {


  return (
    <>
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Content/>}/>
      {/* auth:
       - Signup
       - Login
        */}
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      {/* Route to display all Professor */}
      {/* Route to create one Professor */}
      {/* Route to display all Course */}
      {/* Route to create one Course */}
      {/* Route to create one Student */}


      <Route path="*" element={<h1> 404 page</h1>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
