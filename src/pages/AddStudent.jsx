import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [classes, setClasses] = useState(""); // Changed the state variable name to avoid conflict
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleClassesChange = (e) => setClasses(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhotoChange = (e) => setPhoto(e.target.files[0]);

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("classes", classes);
    formData.append("age", age);
    formData.append("email", email);
    formData.append("photo", photo);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/authstud/signup`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSubmitted(true);
        setTimeout(() => navigate("/class"), 250);
      } else {
        // Handle error response
      }
    } catch (error) {
      console.log("Error adding Student:", error);
      // Handle error
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
        <h2 style={{ fontFamily: "Learning Curve" }}>Classes:</h2>
        <select
          value={classes}
          onChange={handleClassesChange}
          className="student-input"
        >
          <option value="">Select </option>
          <option value="Math">Math</option>
          <option value="French">French</option>
          <option value="Programming">Programming</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Others">Others</option>
        </select>
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
          name="photo"
          accept="image/png, image/jpg"
          onChange={handlePhotoChange}
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
