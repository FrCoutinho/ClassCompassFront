import React, { useState } from 'react';

const SignupPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });
            if (response.status === 201) {
                const newUser = await response.json()
                console.log(newUser)
              } else if (response.status === 400) {
                const error = await response.json()
                console.log(error)
                throw new Error(error.message)
              }
            } catch (error) {
              console.log(error)
              setErrorMessage(error.message)
            }
          }

          return (
            <body className="bodySignup">
              <div className="backgroundSignup" />
              <div className="cardSignup">
                <h2>Sign Up</h2>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <form className="formSignup" onSubmit={handleSubmit}>
                  <input
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder="Username"
                  />
                  <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type="password"
                    placeholder="Password"
                  />
          
                  {/* Sign Up button (remains for form submission) */}
                  <button type="submit">Sign Up</button>
          
                  {/* Added buttons for Forgot Password and Login */}
                  <div className="additional-actions">
                    <button onClick={() => handleForgotPassword()}>
                      <i className="fas fa-question-circle"></i> Forgot Password?
                    </button>
                    <button onClick={() => handleLogin()}>Login</button>
                  </div>
                </form>
              </div>
            </body>
          );
    };
     
    export default SignupPage;