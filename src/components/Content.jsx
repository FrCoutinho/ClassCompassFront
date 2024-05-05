import React from "react";
import { Link } from "react-router-dom"; // Import Link component for routing
import student from "../imagens/student.png";
import teacher from "../imagens/teacher.png";
import about from "../imagens/about.png";

function Content() {
  return (
    <>
      <div className="Content">
        <h1 className="Maintitle">Class Compass</h1>
      </div>
      <div className="Content2">
        <nav>
          <img src={teacher} alt="teacher" height={260} />
          <Link to="/addteachers" className="nav-links">
            <h2 className="Maintitle2">Teachers</h2>
            <p className="Maintitle3">
              Join a supportive community of educators.
            </p>
          </Link>
          <img src={student} alt="student" height={260} />
          <Link to="/allteachers" className="nav-links">
            <h2 className="Maintitle2">Students</h2>
            <p className="Maintitle3">
              Empower your learning journey with engaging resources.
            </p>
          </Link>
          <img src={student} alt="student" height={260} />
          <Link to="/allteachers" className="nav-links">
            <h2 className="Maintitle2">Students</h2>
            <p className="Maintitle3">
              Empower your learning journey with engaging resources.
            </p>
          </Link>
          /*
          <img src={classImage} alt="class" height={260} />
          */
          <Link to="/class" className="nav-links">
            <h2 className="Maintitle2">Classes</h2>
            <p className="Maintitle3">
              Discover how Class Compass can unlock your educational potential.
            </p>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Content;
