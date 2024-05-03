import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import AllTeachers from "./pages/AllTeachers";
import AddTeacher from "./pages/AddTeacher";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          {/* auth:
       - Signup
       - Login
        */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allteachers" element={<AllTeachers />} />
          <Route path="/addteachers" element={<AddTeacher />} />
          {/* Route to display all Course */}
          {/* Route to create one Course */}
          {/* Route to create one Student */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h1> 404 page</h1>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
