import React from "react";
import Login from "../../components/Login/Login";
import "./LoginPage.css";
import Background from "../../components/Background/Background"; // Importe o novo componente

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <Background /> 
      <Login />

    </div>
  );
};

export default LoginPage;