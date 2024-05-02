// React component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProfessor = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [experienceYears, setExperienceYears] = useState(0); // Changed to a number
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleExperienceYearsChange = (e) => setExperienceYears(e.target.value); // Changed to setExperienceYears
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  async function handleFormSubmit(e) {
    e.preventDefault();

    const newProfessor = {
      name: name,
      subject: subject,
      experience_years: experienceYears, 
      email: email,
      hashedPassword: password, 
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: "POST",
        body: JSON.stringify(newProfessor),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
          navigate(); 
        }, 250);
      }
    } catch (error) {
      console.log('Error adding professor:', error);
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <input type="text" value={subject} onChange={handleSubjectChange} placeholder="Subject" />
      <input type="number" value={experienceYears} onChange={handleExperienceYearsChange} placeholder="Experience Years" />
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProfessor;
