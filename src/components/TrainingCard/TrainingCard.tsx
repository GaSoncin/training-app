import React from "react";
import "./TrainingCard.css";

interface TrainingCardProps {
  title: string;
  date: string;
  onClick: () => void; // Adicionando o onClick como prop
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, date, onClick }) => {
  return (
    <div className="training-card" onClick={onClick}>
      <h2>{title}</h2>
      <p>Data de conclusão: {date}</p>
    </div>
  );
};

export default TrainingCard;
