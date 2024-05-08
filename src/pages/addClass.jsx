import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const [subject, setSubject] = useState("");
  const [professor, setProfessor] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [professors, setProfessors] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/allteachers`
        );
        if (response.ok) {
          const data = await response.json();
          setProfessors(data);
        } else {
          console.error("Failed to fetch professors");
        }
      } catch (error) {
        console.error("Error fetching professors:", error);
      }
    };
    const fetchStudents = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/class`);
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
        } else {
          console.error("Failed to fetch students");
        }
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchProfessors();
    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchStudentById = async () => {
      if (studentId) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/class/${studentId}`
          );
          if (response.ok) {
            const data = await response.json();
            setStudent(data);
          } else {
            console.error("Failed to fetch student details");
          }
        } catch (error) {
          console.error("Error fetching student details:", error);
        }
      }
    };

    fetchStudentById();
  }, [studentId]);

  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleProfessorChange = (e) => setProfessor(e.target.value);
  const handleStudentChange = (e) => setStudentId(e.target.value);

  //  const professors = [{ id: "663b502b4e3c93b683cb44b8", name: "Professor 1" }];

  async function handleFormSubmit(e) {
    e.preventDefault();

    const newClass = {
      subject: subject,
      professor: professor,
      student: { name: student.name },
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
        <h2 style={{ fontFamily: "Learning Curve" }}>Professor:</h2>
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
        <h2 style={{ fontFamily: "Learning Curve" }}>Student:</h2>
        <select
          value={studentId}
          onChange={handleStudentChange}
          className="class-input"
        >
          <option value="">Select</option>
          {students.map((stu) => (
            <option key={stu.id} value={stu.id}>
              {stu.name}
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
            Class for subject {subject} with Professor {professor} and Student{" "}
            {student ? student.name : ""} has been created successfully.
          </p>
        </div>
      )}
    </div>
  );
};

export default AddClass;
