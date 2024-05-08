import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { token, role } = useContext(SessionContext);
  const isProfessor = role === "professor";

  if (!token) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" />;
  }
  if (isProfessor && role !== "professor") {
    // Redirect if the user is not a professor
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;

// const PrivateRoute = ({ children }) => {
//   const { token, role } = useContext(SessionContext);

//   if (!token) {
//     // Redirect to login if user is not authenticated
//     return <Navigate to="/login" />;
//   }
//   if (role !== "professor") {
//     // Redirect if the user is not a professor
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default PrivateRoute;
