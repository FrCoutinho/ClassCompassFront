import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherImg from "../imagens/Content.jpg";

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [experienceYears, setExperienceYears] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleExperienceYearsChange = (e) => setExperienceYears(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePhotoChange = (e) => setPhoto(e.target.files[0]); // Função para lidar com a mudança de arquivo

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!name) {
      console.log("Name is required");
      return;
    }

    const newTeacher = {
      name: name,
      subject: subject,
      experience_years: experienceYears,
      email: email,
      password: password, // corrected variable name
    };
    console.log(newTeacher);
    const formData = new FormData();
    for (const key in newTeacher) {
      if (Object.hasOwnProperty.call(newTeacher, key)) {
        formData.append(key, newTeacher[key]);
      }
    }

    if (photo) {
      formData.append("photo", photo);
    }

    console.log(formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/authprof/signup`,
        {
          method: "POST",
          body: formData,
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
        <select
          value={subject}
          onChange={handleSubjectChange}
          className="teacher-input"
        >
          <option value="">Select </option>
          <option value="Math">Math</option>
          <option value="French">French</option>
          <option value="History">Programing</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Others">Others</option>
        </select>
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
        {/* Campo de upload de foto */}
        <h2 style={{ fontFamily: "Learning Curve" }}>Add Photo:</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="teacher-input"
        />
        <button type="submit" className="teacher-submit">
          Submit
        </button>
      </form>
      <div
        className="Maintitle2"
        style={{ textAlign: "center", margin: "50px 150px 150px 150px" }}
      >
        <p>
          This app is your ultimate teaching companion. From managing your class
          schedule and attendance to creating engaging lessons and sharing
          resources,ClassCompass will streamline your workflow and empower you
          to focus on what matters most: your students!
        </p>

        <p>
          Explore the app and discover helpful tools to make your teaching
          journey a success. We're confident you'll find ClassCompass an
          invaluable resource for both you and your students.
        </p>

        <p>Let's get started!</p>
      </div>
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
