import React from 'react';
import TrainingList from '../components/TrainingList';
import './TrainingPage.css';
import '../global.css'

const TrainingPage: React.FC = () => {
  return (
    <div className="training-page">
      <h1>Jornada do Treinamento</h1>
      <TrainingList />
    </div>
  );
};

export default TrainingPage;
