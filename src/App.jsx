import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AllTeachers from "./pages/AllTeachers";
import AddTeacher from "./pages/AddTeacher";
import AddClass from "./pages/addClass";
import AddStudent from "./pages/AddStudent";
import { Navigate } from "react-router-dom";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Function to check authentication status
  const checkAuth = () => {
    // Your authentication logic here

    return isLoggedIn;
  };

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
          <Route
            path="/addteachers"
            element={
              <PrivateRoute>
                {" "}
                <AddTeacher />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/addclass"
            element={
              <PrivateRoute>
                <AddClass />
              </PrivateRoute>
            }
          />
          <Route
            path="/addstudent"
            element={
              <PrivateRoute>
                <AddStudent />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<h1>404 page</h1>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
