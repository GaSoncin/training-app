import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '../global.css'

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Nome de usuário e senha são obrigatórios.');
      return;
    }
    console.log('Logging in with', { username, password });
    setError(''); // Clear any previous errors
    navigate('/trainings');
  };

  return (
    <div className="login-container">
      <h1>SEJA BEM VINDO</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label id='name' htmlFor="username"></label>
          <input
            placeholder='usuário'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label id='password' htmlFor="password"></label>
          <input
            placeholder='******'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
