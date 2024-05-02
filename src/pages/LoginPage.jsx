import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionConntext'

const LoginPage = () => {
  const { setToken } = useContext(SessionContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData.token)
        setToken(responseData.token)
    } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed. Please try again.');
      }
    } catch (error) {
        console.log('Login failed:', error);
        setErrorMessage('Login failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    return ( 
        <body>
        <div className="backgroundLogin"/>
            <div className="cardLogin">
                <h2>Welcome</h2>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <form className="formLogin" onSubmit={handleSubmit}>
                    <input
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        type="email"
                        placeholder="Username"
                    />
                    <input
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
                <footer>
                    Need an account? Sign up
                    <a href="#">here</a>
                </footer>
            </div>
      
        </body>
    );
};
 
export default LoginPage;
