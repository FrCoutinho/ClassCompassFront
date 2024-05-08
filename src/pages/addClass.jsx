import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const [subject, setSubject] = useState("");
  const [professor, setProfessor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleProfessorChange = (e) => setProfessor(e.target.value);

  const professors = [
    { id: 1, name: "Professor 1" },
    { id: 2, name: "Professor 2" },
  ];

  async function handleFormSubmit(e) {
    e.preventDefault();

    const newClass = {
      subject: subject,
      professor: professor,
      student: { name: "Student Name" },
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
        method: "POST",
        body: JSON.stringify(newClass),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          navigate("/allclasses");
        }, 250);
        setSubmitted(true);
      }
    } catch (error) {
      console.log("Error adding class:", error);
    }
  }

  return (
    <div className="class-container">
      <form onSubmit={handleFormSubmit} className="class-form">
        <h2 style={{ fontFamily: "Learning Curve" }}>Disciplines:</h2>
        <select
          value={subject}
          onChange={handleSubjectChange}
          className="teacher-input"
        >
          <option value="">Select </option>
          <option value="Math">Math</option>
          <option value="Science">French</option>
          <option value="History">Programing</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Others">Others</option>
        </select>
        <select
          value={professor}
          onChange={handleProfessorChange}
          className="class-input"
        >
          <option value="">Select</option>
          {professors.map((prof) => (
            <option key={prof.id} value={prof.id}>
              {prof.name}
            </option>
          ))}
        </select>
        <button type="submit" className="class-submit" disabled={submitted}>
          {submitted ? "Submitting..." : "Submit"}
        </button>
      </form>
      {submitted && (
        <div className="class-message">
          <p>
            Class for subject {subject} with Professor {professor} has been
            created successfully.
          </p>
        </div>
      )}
    </div>
  );
};

export default AddClass;
