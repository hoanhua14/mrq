import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";
import StyledButton from './ReactComponents/button';

const LoginForm = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, token } = useToken();
  const [loginattempt, setLoginAttempt] = useState(false);
  const [showErrowMessage, setShowErrorMessage] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    event.target.reset();
    await login(username, password);
    setLoginAttempt(true);
  };

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    } else if (!token && loginattempt) {
        setTimeout(() => {
            setShowErrorMessage(true)
        }, 500)
    }
  }, [token, loginattempt, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-[url(https://i.imgur.com/6tXuiW2.png)] bg-cover bg-center bg-no-repeat">
      <div className="bg-white p-12 rounded-lg shadow-lg" style={{ backgroundColor: '#c5f2e6' }}>
        <h1 className="text-2xl font-bold mb-4">Login to start crushing your goals!</h1>
        {showErrowMessage ? (
          <div class="flex p-4 mb-4 text-sm text-red-800 shadow-lg rounded-lg bg-purple-100 dark:text-red-400" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Danger</span>
            <div>
              <p class="font-medium">Login failed.</p>
              <p class="font-medium">Check username and/or password and try again.</p>
            </div>
          </div>
        ) : (
          <></>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
              type="email"
              name="username"
              id="username"
              className="form-input"
              value={username}
            />
          </div>
          <div className="mb-4">
            <input
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
              type="password"
              name="password"
              id="password"
              className="form-input"
              value={password}
            />
          </div>
          <StyledButton text="Log in" type="Log in">
            Login
          </StyledButton>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
