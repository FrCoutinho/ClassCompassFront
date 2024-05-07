import React, { useState } from "react";
import { Link } from "react-router-dom";
import student from "../imagens/student.png";
import teacher from "../imagens/teacher.png";
import classImage from "../imagens/classImage.png";
import raiting from "../imagens/raiting.jpg";

function Content() {
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  return (
    <>
      <div className="Content">
        <h1 className="Maintitle">Class Compass</h1>
      </div>
      <div className="Content3">
        <h2>Raiting</h2>
        <h3>4,8 / 5 -- by professors in the World</h3>
        <img src={raiting} alt="raiting" height={150} />
      </div>
      <div className="Content2">
        <h2>Be one off us:</h2>
        <nav>
          <img src={teacher} alt="teacher" height={260} />
          <Link to="/addteachers" className="nav-links">
            <h2 className="Maintitle2">Teachers</h2>
            <p className="Maintitle3">
              Join a supportive community of educators.
            </p>
          </Link>
          <img src={student} alt="student" height={260} />
          <Link to="/addstudent" className="nav-links">
            <h2 className="Maintitle2">Students</h2>
            <p className="Maintitle3">
              Empower your learning journey with engaging resources.
            </p>
          </Link>
          <img src={classImage} alt="classImage1" height={260} />
          <Link to="/allteachers" className="nav-links">
            <h2 className="Maintitle2">Class</h2>
            <p className="Maintitle3">
              Unlock your creativity with expert guidance.
            </p>
          </Link>
          <img src={classImage} alt="classImage2" height={260} />
          <Link to="/class" className="nav-links">
            <h2 className="Maintitle2">Classes</h2>
            <p className="Maintitle3">
              Discover how Class Compass can unlock your educational potential.
            </p>
          </Link>
        </nav>
      </div>
      {/* Feedback Form */}
      <div className="feedback-container">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={feedback}
            onChange={handleChange}
            placeholder="Enter your feedback here..."
            rows={4}
            cols={50}
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </>
  );
}

export default Content;
