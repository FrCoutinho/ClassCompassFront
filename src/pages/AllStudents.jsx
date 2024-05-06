import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllStudents = () => {
  const [students, setstudents] = useState([]);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    return (
        <div className="teacher-container card-grid">
          {students.map((teacher) => (
            <div key={teacher._id} className="teacher-card card">
              <div className="card__background" style={{ backgroundImage: `url(${TeacherImg})` }}></div>
              <div className="card__content teacher-details">
                <h2 className="card__heading">{teacher.name}</h2>
                <p className="card__category">Age: {teacher.age}</p>
                <p className="card__category">Classes: {teacher.classes}</p>
                <p className="card__category">Email: {teacher.email}</p>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
export default AllStudents;
