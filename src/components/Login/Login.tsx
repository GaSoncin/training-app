import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../../styles/global.css";
import logo from "../../assets/logo.png";
import eyeIcon from "../../assets/eye-icon.png";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setError("usuário e senha são obrigatórios");
      return;
    }
    console.log("Logging in with", { username, password });
    setError("");
    navigate("/trainings");
  };

  return (
    <div className="login-page">
      <img src={logo} alt="Logo" className="logo" />
      <div className="login-container">
        <h1>
          SEJA<br></br>BEM-VINDO
        </h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label id="name" htmlFor="username"></label>
            <input
              placeholder="usuário"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group password-group">
            <label id="password" htmlFor="password"></label>
            <input
              placeholder="******"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={eyeIcon}
              alt="Show password"
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
