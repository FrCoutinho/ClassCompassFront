// ProtectedContent.jsx

import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedContent = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Protected Content</h2>
      <p>This is the content that only authenticated users.</p>
    </div>
  );
};

export default ProtectedContent;
