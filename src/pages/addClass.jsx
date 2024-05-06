import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const [subject, setSubject] = useState("");
  const [professor, setProfessor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleProfessorChange = (e) => setProfessor(e.target.value);

  async function handleFormSubmit(e) {
    e.preventDefault();

    const newClass = {
      subject: subject,
      professor: professor,
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
        <h2 style={{ fontFamily: "Learning Curve" }}>Create new class:</h2>
        <input
          type="text"
          value={subject}
          onChange={handleSubjectChange}
          placeholder="Subject"
          className="class-input"
        />
        <input
          type="text"
          value={professor}
          onChange={handleProfessorChange}
          placeholder="Professor"
          className="class-input"
        />
        <button type="submit" className="class-submit">
          Submit
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
