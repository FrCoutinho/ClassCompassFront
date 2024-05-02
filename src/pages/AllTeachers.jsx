import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TeacherImg from '../imagens/Content.jpg';

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/teachers`);
        if (response.ok) {
          const data = await response.json();
          setTeachers(data);
          setLoading(false);
        } else {
          console.log('Failed to fetch teachers:', response.status);
        }
      } catch (error) {
        console.log('Error fetching teachers:', error);
      }
    }

    fetchTeachers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="teacher-container">
      {teachers.map(teacher => (
        <div key={teacher.id} className="teacher-card">
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
}

export default AllTeachers;
