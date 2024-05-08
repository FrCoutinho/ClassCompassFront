import React, { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link, Navigate } from "react-router-dom";

const SignupPage = () => {
  const { setToken } = useContext(SessionContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("student"); // Default mode is student
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, mode }), // Include mode in the request
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        setToken(responseData.token);
        setSignedUp(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setSignedUp(false);
    setToken(null);
  };

  if (signedUp) {
    return <Navigate to="/" />;
  }

  return (
    <div className="divSignup">
      <div className="backgroundSignup"></div>
      <div className="cardSignup">
        <Link to="/" className="nav-links">
          X
        </Link>
        <h2>Signup Page</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="formSignup">
          <label>
            Username
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Mode:
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value)}
            >
              <option value="student">Student</option>
              <option value="professor">Professor</option>
            </select>
          </label>
          <button type="submit">Sign up</button>
        </form>
        <footer>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="nav-links">
              Log in
            </Link>
          </p>
        </footer>
      </div>
      {signedUp && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default SignupPage;
