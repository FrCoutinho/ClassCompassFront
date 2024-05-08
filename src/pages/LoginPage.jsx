import React, { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link, Navigate } from "react-router-dom";

const LoginPage = () => {
  const { setToken } = useContext(SessionContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("student"); // Default mode is student
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
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
        setLoggedIn(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setToken(null);
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="divLogin">
      <div className="backgroundLogin"></div>
      <div className="cardLogin">
        <Link to="/" className="nav-links">
          X
        </Link>
        <h2>Login Page</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="formLogin">
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
          <button type="submit">Log in</button>
        </form>
        <footer>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="nav-links">
              Sign up
            </Link>
          </p>
        </footer>
      </div>
      {loggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default LoginPage;
