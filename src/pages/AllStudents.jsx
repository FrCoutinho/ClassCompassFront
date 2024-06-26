import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/student/students`
        );
        if (response.ok) {
          const data = await response.json();
          setStudents(data);
          setLoading(false);
        } else {
          console.log("Failed to fetch students:", response.status);
        }
      } catch (error) {
        console.log("Error fetching students:", error);
      }
    }

    fetchStudents();
  }, []);
  const handleDelete = async (student_id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/student/students/${teacher_id}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        await fetchStudent();
      }
      setTimeout(() => {
        navigate("/class");
      }, 250);
    } catch (error) {
      console.log("Error deleting student:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hero-section">
      <div className="card-grid">
        {students.map((student) => (
          <div key={student._id} className="card">
            <img
              className="card__background"
              src={student.photo}
              alt={student.name}
              style={{ width: "300px", height: "400px" }}
            />

            <div className="card__content">
              <h2 className="card__heading">{student.name}</h2>
              <p className="card__category">Subject: {student.subject}</p>
              <p>Experience Years: {student.experience_years}</p>
              <p>Email: {student.email}</p>
            </div>
            <Link to={`/classes`} className="btn">
              Classes
            </Link>
            <button
              className="student-delete"
              type="deleteButton"
              onClick={(event) => {
                handleDelete(student._id, event);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;
