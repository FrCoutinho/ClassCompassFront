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
          `${import.meta.env.VITE_API_URL}/professor/professors`
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
    <div className="teacher-container">
      {students.map((teacher) => (
        <div key={teacher._id} className="teacher-card">
          <img src={TeacherImg} alt="teacherImg" className="teacher-image" />
          <div className="teacher-details">
            <h2>{teacher.name}</h2>
            <p>Age: {teacher.age}</p>
            <p>Classes: {teacher.classes}</p>
            <p>Email: {teacher.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllStudents;
