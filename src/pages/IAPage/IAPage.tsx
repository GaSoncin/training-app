import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IAPage.css";
import iaImage from "../../assets/iaImage.jpg";
import Background from "../../components/Background/Background";

const IApage: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="IA-page">
      <Background />
      <div className="header">
        <div className="menu" onClick={toggleMenu}>
          <span className="menu-icon">≡</span>
          <span className="menu-text">menu</span>
          {menuOpen && (
            <div className="dropdown-menu">
              <button onClick={() => navigate("/")}>Sair</button>
              <button onClick={() => navigate("/trainings")}>Perfil</button>
              <button onClick={() => navigate("/journey")}>Jornada</button>
            </div>
          )}
        </div>
      </div>
      <img src={iaImage} alt="IA foto" className="ia-image" />
        <h1 className="username">
          GALLI-IA
        </h1>
        <div className="chat-box">
            <div className="chats">
            <h2 className="IaChat">Como posso ajudar ? </h2>
            </div>
            <input className="text-bar" type="text" />
        </div>
    </div>
  );
};

export default IApage;
