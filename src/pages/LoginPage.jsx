import { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { setToken } = useContext(SessionContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          body: JSON.stringify({ username, password }),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="divLogin">
      <div className="backgroundLogin"></div>
      <div className="cardLogin">
        <Link to="/" className="nav-links">
          X
        </Link>
        <h2>Login Page</h2>
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
    </div>
  );
};

export default LoginPage;
