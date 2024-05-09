import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/professor/professors`
        );
        if (response.ok) {
          const data = await response.json();
          setTeachers(data);
          setLoading(false);
        } else {
          console.log("Failed to fetch teachers:", response.status);
        }
      } catch (error) {
        console.log("Error fetching teachers:", error);
      }
    }

    fetchTeachers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (teacher_id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/professor/professors/${teacher_id}`,
        { method: "DELETE" }
      );

      setTimeout(() => {
        navigate("/allteachers");
      }, 250);
    } catch (error) {
      console.log("Error deleting teacher:", error);
    }
  };
  const handleUpdate = async (teacher_id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/professor/professors/${teacher_id}`,
        { method: "PUT" }
      );

      setTimeout(() => {
        navigate("/addteacher");
      }, 250);
    } catch (error) {
      console.log("Error updating teacher:", error);
    }
  };

  return (
    <div className="hero-section">
      <div className="card-grid">
        {teachers.map((teacher) => (
          <div key={teacher._id} className="card">
            <img
              className="card__background"
              src={teacher.photo}
              style={{ width: "300px", height: "400px" }}
            />

            <div className="card__content">
              <h2 className="card__heading">{teacher.name}</h2>
              <p className="card__category">Subject: {teacher.subject}</p>
              <p>Experience Years: {teacher.experience_years}</p>
              <p>Email: {teacher.email}</p>
              <Link to={`/addclass`} className="btn">
                Add Class
              </Link>
              <button
                className="student-delete"
                type="deleteButton"
                onClick={(event) => {
                  handleDelete(teacher._id, event);
                }}
              >
                Delete
              </button>
              <br></br>
              <button
                className="student-edit"
                type="editButton"
                onClick={(event) => {
                  handleUpdate(teacher._id, event);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTeachers;
