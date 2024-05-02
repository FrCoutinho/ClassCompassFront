import React from "react";
import { Link } from "react-router-dom";
import Questions from '../imagens/questions.jpg'; // Assuming 'Questions' is imported correctly

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <img src={Questions} alt="questions" height={260} />
      <button> {/* Corrected Button to button */}
        <Link to="/">Go back to Home</Link>
      </button>
    </div>
  );
};

export default AboutPage;
