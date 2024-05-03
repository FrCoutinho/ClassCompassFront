import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherImg from "../imagens/Content.jpg";

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [experienceYears, setExperienceYears] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleExperienceYearsChange = (e) => setExperienceYears(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  async function handleFormSubmit(e) {
    e.preventDefault();

    const newTeacher = {
      name: name,
      subject: subject,
      experience_years: experienceYears,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/authprof/signup`,
        {
          method: "POST",
          body: JSON.stringify(newTeacher),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          navigate("/allteachers");
        }, 250);
        setSubmitted(true);
      }
    } catch (error) {
      console.log("Error adding Teacher:", error);
    }
  }

  return (
    <div className="teacher-container">
      <form onSubmit={handleFormSubmit} className="teacher-form">
        <img src={TeacherImg} alt="teacherImg" className="teacher-image" />
        <h2 style={{ fontFamily: "Learning Curve" }}>Create new:</h2>
        <input
          type="String"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          className="teacher-input"
        />
        <h2 style={{ fontFamily: "Learning Curve" }}>Disciplines:</h2>
        <input
          type="String"
          value={subject}
          onChange={handleSubjectChange}
          placeholder="Subject"
          className="teacher-input"
        />
        <h2 style={{ fontFamily: "Learning Curve" }}>Experience Years:</h2>
        <input
          type="number"
          value={experienceYears}
          onChange={handleExperienceYearsChange}
          placeholder="Experience Years"
          className="teacher-input"
        />
        <h2 style={{ fontFamily: "Learning Curve" }}>Email:</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="teacher-input"
        />
        <h2 style={{ fontFamily: "Learning Curve" }}>Password:</h2>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="teacher-input"
        />
        <button type="submit" className="teacher-submit">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="teacher-message">
          <p>
            Welcome, {name}! Your path to becoming a teacher starts here. Find
            everything you need to thrive in the classroom.
          </p>
          {/* You can customize these further by adding details about your app's unique features or benefits for aspiring teachers. */}
        </div>
      )}
    </div>
  );
};

export default AddTeacher;
