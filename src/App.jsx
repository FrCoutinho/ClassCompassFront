import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import AllTeachers from "./pages/AllTeachers";
import AddTeacher from "./pages/AddTeacher";
import ProtectedContent from "./pages/ProtectedContent";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
          <Route path="/allstudents" element={<AllStudents />} />
          <Route path="/protected">
            <Route path="/addteachers" element={<AddTeacher />} />
            <Route path="/addclass" element={<AddClass />} />
            <Route path="/addstudent" element={<AddStudent />} />
            {checkAuth() ? <ProtectedContent /> : <Redirect to="/login" />}
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h1> 404 page</h1>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
