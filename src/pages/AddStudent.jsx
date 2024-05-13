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
      <div className="Maintitle2">
        <p>Welcome to ClassCompass, New Student! </p>
        <br></br>
        <p>
          Feeling a little lost on your first day? Don't worry, we've all been
          there. The ClassCompass app is here to be your guide!
        </p>
        <br></br>
        <p>
          In this app, you'll find everything you need to navigate your new
          journey as a student. From finding your classes and getting to know
          your teachers, to joining clubs and connecting with classmates,
          ClassCompass is your one-stop shop for a smooth transition.
        </p>
        <br></br>
        <p>
          Let's explore together! Dive into the app and unlock its amazing
          features that will make your school experience awesome.
        </p>
      </div>
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
