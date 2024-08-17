import React from "react";
import TrainingCard from "../TrainingCard/TrainingCard";
import "./TrainingList.css";

const trainings = [
  
  { title: "Treinamento de Produção", date: "21/10/2022" },
  { title: "Treinamento Em Segurança", date: "15/09/2022" },
  { title: "Treinamento Em Comunicação", date: "03/07/2022" },
  { title: "Treinamento de Produção", date: "21/10/2022" },
  { title: "Treinamento Em Segurança", date: "15/09/2022" },
  { title: "Treinamento Em Comunicação", date: "03/07/2022" },
];

const TrainingList: React.FC = () => {
  return (
    <div className="training-list">
      {trainings.map((training, index) => (
        <TrainingCard key={index} title={training.title} date={training.date} />
      ))}
    </div>
  );
};

export default TrainingList;