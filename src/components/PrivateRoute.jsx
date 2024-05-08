import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(SessionContext);

  if (!token) {
    return <Navigate to="/login" />;
  }
  if (isProfessor && role !== "professor") {
    // Redirect if the user is not a professor
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
