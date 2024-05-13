import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TeacherImg from "../imagens/Content.jpg";

const UpdateTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    subject: "",
    experienceYears: "",
    email: "",
    password: "",
    photo: "",
  });
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //const { teacherId } = useParams();

  const query = new URLSearchParams(window.location.search);
  const teacherId = query.get("teacherId");

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/professor/professors/${teacherId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch teacher data");
        }
        const teacherData = await response.json();
        setTeacher(teacherData);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    if (teacherId) {
      fetchTeacher();
    }
  }, [teacherId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/professor/professors/${teacherId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teacher),
        }
      );
      if (response.ok) {
        const teacherData = await response.json();
        setTeacher(teacherData);
        navigate("/allteachers");
      } else {
        console.error("Failed to update:", await response.json());
      }
    } catch (error) {
      console.error("Error updating teacher data:", error);
    }
  };

  return (
    <div className="teacher-container">
      <form onSubmit={handleSubmit} className="teacher-form">
        <img src={TeacherImg} alt="teacherImg" className="teacher-image" />
        <h2 style={{ fontFamily: "Learning Curve" }}>Create new:</h2>
        <input
          type="String"
          value={teacher.name}
          onChange={handleChange}
          placeholder="Name"
          className="teacher-input"
        />
        <h2 style={{ fontFamily: "Learning Curve" }}>Disciplines:</h2>
        <select
          value={teacher.subject}
          onChange={handleChange}
          name="subject"
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

        <h2 style={{ fontFamily: "Learning Curve" }}>Email:</h2>
        <input
          type="email"
          value={teacher.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          className="teacher-input"
        />

        <button type="submit" className="teacher-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateTeacher;
