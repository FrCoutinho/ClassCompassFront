import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleGradeChange = (e) => setGrade(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();

    const newStudent = {
      name: name,
      age: age,
      email: email,

      photo: photo,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/authstudent/signup`,
        {
          method: "POST",
          body: JSON.stringify(newStudent),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          navigate("/allstudents");
        }, 250);
        setSubmitted(true);
      }
    } catch (error) {
      console.log("Error adding Student:", error);
    }
  }

  return (
    <div className="student-container">
      <form onSubmit={handleFormSubmit} className="student-form">
        <h2 style={{ fontFamily: "Learning Curve" }}>Create new:</h2>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          className="student-input"
        />
        <h2 style={{ fontFamily: "Learning Curve" }}>Grade:</h2>
        <input
          type="text"
          value={grade}
          onChange={handleGradeChange}
          placeholder="Grade"
          className="student-input"
        />
        <h2 style={{ fontFamily: "Learning Curve" }}>Age:</h2>
        <input
          type="number"
          value={age}
          onChange={handleAgeChange}
          placeholder="Age"
          className="student-input"
        />
        <h2 style={{ fontFamily: "Learning Curve" }}>Email:</h2>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="student-input"
        />

        <h2 style={{ fontFamily: "Learning Curve" }}>Photo:</h2>
        <input
          type="file"
          onChange={handlePhotoChange}
          className="student-input"
        />

        <button type="submit" className="student-submit">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="student-message">
          <p>
            Welcome, {name}! You have successfully enrolled as a student. Get
            ready to embark on an exciting learning journey!
          </p>
        </div>
      )}
    </div>
  );
};

export default AddStudent;
