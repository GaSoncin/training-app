import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainingJourney.css";
import blockIcon from "../../assets/block.png";
import characterIcon from "../../assets/character.png";
import trophyIcon from "../../assets/trophy.png";
import Background from "../../components/Background/Background";

const TrainingJourney: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const stages = [
    { id: 0, name: "Introdução a produção", icon: blockIcon },
    { id: 1, name: "Conceitos de produção pt1", icon: blockIcon },
    { id: 2, name: "Conceitos de produção pt2", icon: blockIcon },
    { id: 3, name: "Metas de produção", icon: blockIcon },
    { id: 4, name: "Sequência de produção", icon: blockIcon },
    { id: 5, name: "Certificação", icon: trophyIcon },
  ];

  const moveLeft = () => {
    setCurrentPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const moveRight = () => {
    setCurrentPosition((prevPosition) =>
      Math.min(prevPosition + 1, stages.length - 1)
    );
  };

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="training-journey">
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
      <h1 className="title">JORNADA DO TREINAMENTO</h1>
      <div className="journey-container">
        {stages.map((stage, index) => (
          <div className="stage" key={stage.id}>
            {currentPosition === index && (
              <img
                src={characterIcon}
                alt="Personagem"
                className="stage-icon character"
              />
            )}
            <img src={stage.icon} alt={stage.name} className="stage-icon" />
            <p>{stage.name}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={moveLeft} disabled={currentPosition === 0}>
          Esquerda
        </button>
        <button
          onClick={moveRight}
          disabled={currentPosition === stages.length - 1}
        >
          Direita
        </button>
      </div>
    </div>
  );
};

export default TrainingJourney;