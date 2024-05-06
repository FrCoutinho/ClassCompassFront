import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AllClass = () => {
  const [class, setClass] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchClass() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/class/classes`
        );
        if (response.ok) {
          const data = await response.json();
          setClass(data);
          setLoading(false);
        } else {
          console.log("Failed to fetch class:", response.status);
        }
      } catch (error) {
        console.log("Error fetching class:", error);
      }
    }

    fetchClass();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="teacher-container">
      {class.map((teacher) => (
        <div key={teacher._id} className="teacher-card">
          <img src={TeacherImg} alt="teacherImg" className="teacher-image" />
          <div className="teacher-details">
            <h2>{teacher.name}</h2>
            <p>Subject: {teacher.subject}</p>
            <p>Experience Years: {teacher.experience_years}</p>
            <p>Email: {teacher.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClass;
