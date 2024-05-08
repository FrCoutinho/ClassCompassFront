import React, { useState } from "react";
import { Link } from "react-router-dom";
import student from "../imagens/student.png";
import teacher from "../imagens/teacher.png";
import classImage from "../imagens/classImage.png";
import raiting from "../imagens/raiting.jpg";
import creatClass from "../imagens/createClass.png";
import allStudentsIMG from "../imagens/allStudentsIMG.jpg";

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
      {/*--------------------------------------------------*/}
      <div className="Content2"></div>
      <img src={teacher} alt="teacher" height={260} />
      <Link to="/allteachers" className="nav-links">
        <h2 className="Maintitle2">Teachers</h2>
        <p className="Maintitle3">
          Unlock your creativity with expert guidance.
        </p>
      </Link>
      <img src={classImage} alt="classImage2" height={260} />
      <Link to="/classes" className="nav-links">
        <h2 className="Maintitle2">Classes</h2>
        <p className="Maintitle3">
          Discover how Class Compass can unlock your educational potential.
        </p>
      </Link>
      <h2
        style={{
          fontFamily: "KG Primary Penmanship",
          fontSize: "30px",
          paddingTop: "100px",
        }}
      >
        Be one off us:
      </h2>
      {/*--------------------------------------------------- */}
      <div className="Content4">
        <div>
          <img src={student} alt="student" height={260} />
          <Link to="/addstudent" className="nav-links">
            <h2 className="Maintitle2">New Students</h2>
            <p className="Maintitle3">
              Empower your learning journey with engaging resources.
            </p>
          </Link>
        </div>
        {/* --------------------------------------------------*/}
        <div className="Aval">
          <h3>5/5</h3>
          <p>Best Teachs with the best rating in the market</p>
        </div>
        <div className="Aval">
          <h3>Best prices</h3>
          <p>All the Teachers offer 1 lesson for free</p>
        </div>
        <div className="Aval">
          <h3>48h</h3>
          <p>Have your reply in less then 4 days</p>
        </div>
        <div className="Steps">
          <h2>3 steps to find what you need</h2>
          <div>
            <h3>1.Login</h3>
            <ul>
              <li>
                Head over to the website or app of the online learning platform.
              </li>
              <li>Enter your registered user name and password.</li>
              <li>Click on "Sign In" or "Login"</li>
            </ul>
          </div>
          <div>
            <h3>Find your Teacher</h3>
            <ul>
              <li>Look for an instructor by name, subject, or specialty.</li>
              <li>
                Explore the categories and filters to find the perfect
                instructor for you.
              </li>
              <li>
                Browse instructor profiles, student reviews, and see available
                lesson slots.
              </li>
            </ul>
          </div>
          <h3>Book your Lesson</h3>
          <ul>
            <li>
              Choose the specific lesson you want to book, considering date,
              time, and price.
            </li>
            <li>Click on "Book" or "Schedule Lesson".</li>
            <li>Confirm your reservation and complete the payment.</li>
          </ul>
        </div>
        <div className="beOne">
          <h2>You can be a teacher too.....</h2>
          <img src={creatClass} alt="teacher" height={260} />
          <Link to="/addteacher" className="nav-links">
            <h2>New Teachers</h2>
            <p>Join a supportive community of educators.</p>
          </Link>
        </div>
        <div className="Content5">
          <h2>All students</h2>
          <img src={allStudentsIMG} alt="classImage2" height={260} />
          <Link to="/class" className="nav-links">
            <h2>All Students</h2>
            <p>
              This is a straightforward option that directly indicates a list of
              students.
            </p>
          </Link>
        </div>
      </div>
      {/*---------------------------------------------------- Feedback Form */}
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
