import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  const fetchClasses = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`);
      if (response.ok) {
        const allClasses = await response.json();
        console.log(allClasses);
        setClasses(allClasses);
      } else {
        console.log("Failed to fetch classes:", response.status);
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };
  useEffect(() => {
    fetchClasses();
  }, []);

  const handleDelete = async (class_id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/class/classes/${class_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        await fetchTeachers();
      }

      setTimeout(() => {
        navigate("/classes");
      }, 250);
    } catch (error) {
      console.log("Error deleting class:", error);
    }
  };

  const handleEdit = async (class_id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/class/classes/${class_id}`, {
        method: "UPDATE",
      });

      setTimeout(() => {
        navigate("/classes");
      }, 250);
    } catch (error) {
      console.log("Error updating class:", error);
    }
  };

  const handlePresenceCheck = (classId, studentId) => {
    console.log(`Class ID: ${classId}, Student ID: ${studentId}`);
  };

  return (
    <div className="hero-section">
      <div className="card-grid">
        <h2>All Classes</h2>
        <ul>
          {classes.map((classItem) => (
            <li key={classItem._id} className="card">
              <img
                className="card__background"
                style={{ width: "300px", height: "400px" }}
              />
              <div className="card__content">
                <div>
                  <strong className="card__heading">Subject:</strong>{" "}
                  {classItem.subject}
                </div>
                <div>
                  <strong className="card__category">Professor:</strong>{" "}
                  {classItem.professor.name}
                </div>
                <div>
                  <strong className="card__category">Students:</strong>{" "}
                </div>

                <button onClick={() => handleDelete(classItem._id)}>
                  Delete
                </button>
                {classItem.students ? (
                  classItem.students.map((student) => (
                    <div key={student._id}>
                      <p>{student.name}</p>
                      <button
                        onClick={() =>
                          handlePresenceCheck(classItem._id, student._id)
                        }
                      >
                        Check Presence
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No students enrolled</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllClasses;
