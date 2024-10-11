import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.scss';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setTokens } = useAuth();
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isBlocked) {
      setError('Доступ временно заблокирован. Пожалуйста, подождите.');
      return;
    }

    try {
      const response = await axios.post(
        '/api/login',
        {
          email: username,
          password: password,
        },
        {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json', 
            },
            withCredentials: true,
        }
      );
      const { accessToken, refreshToken, roleId } = response.data;
      setTokens(accessToken, refreshToken);

      if (roleId ===1) {
        navigate('/admin_menu')
      } else {
        navigate('/menu')
      };   

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        const statusCode = error.response.status;
        
        switch (statusCode) {
          case 404:
            setError('Unknown user');
            break;
          case 400:
            setError('Wrong password');
            break;
          case 401:
            setError('Unauthorized login attempt');
            break;
          case 500:
            setError('Server error');
            break;
          default:
            setError('Unknown Error');
        }

        setAttempts((prev) => prev + 1);
      } else {
        setError('Network or server error');
      }
    }
  };

  useEffect(() => {
    if (attempts >= 3) {
      setIsBlocked(true);
      setTimer(10);

      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setIsBlocked(false);
            setAttempts(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [attempts]);

  return (
    <div className="login-container">
      <div className="logo">
        <h1 className="logo-text">AMONIC Airlines</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isBlocked}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isBlocked}
          />
        </div>
        <div className="button-group">
          <button type="submit" className="login-button" disabled={isBlocked}>
            { isBlocked ? `Wait ${timer} seconds` : 'Login'}
          </button>
          <button
            type="button"
            className="exit-button"
            onClick={() => navigate('/')}
          >
            Exit
          </button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
