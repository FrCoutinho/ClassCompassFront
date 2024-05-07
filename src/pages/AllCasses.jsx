import React, { useEffect, useState } from "react";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`);
        if (response.ok) {
          const allClasses = await response.json();
          setClasses(allClasses);
        } else {
          console.log("Failed to fetch classes:", response.status);
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div>
      <h2>All Classes</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem._id}>
            <p>
              <strong>Subject:</strong> {classItem.subject}
            </p>
            <p>
              <strong>Professor:</strong> {classItem.professor.name}
            </p>
            <p>
              <strong>Student:</strong> {classItem.student.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllClasses;
