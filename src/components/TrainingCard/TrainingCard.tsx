import React from "react";
import "./TrainingCard.css";

interface TrainingCardProps {
  title: string;
  date: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, date }) => {
  return (
    <div className="training-card">
      <h2>{title}</h2>
      <p>Data de conclusão: {date}</p>
    </div>
  );
};

export default TrainingCard;