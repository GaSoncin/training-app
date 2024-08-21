import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainingList from "../../components/TrainingList/TrainingList";
import "./TrainingPage.css";
import profileImage from "../../assets/user.png";
import Background from "../../components/Background/Background";

const TrainingPage: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="training-page">
      <Background />
      <div className="header">
        <div className="menu" onClick={toggleMenu}>
          <span className="menu-icon">≡</span>
          <span className="menu-text">menu</span>
          {menuOpen && (
            <div className="dropdown-menu">
              <button onClick={() => navigate(-1)}>Voltar</button>
              <button onClick={() => navigate("/journey")}>Avançar</button>
            </div>
          )}
        </div>
      </div>
      <div className="profile-section">
        <h1 className="username">
          NOME
          <br />
          USUÁRIO
        </h1>
        <img src={profileImage} alt="User Profile" className="profile-image" />
      </div>
      <div className="training-list-container">
        <TrainingList />
      </div>
    </div>
  );
};

export default TrainingPage;