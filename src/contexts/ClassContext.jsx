// ClassContext.js
import React, { createContext, useState } from "react";

const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);

  const addClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  return (
    <ClassContext.Provider value={{ classes, addClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export default ClassContext;
