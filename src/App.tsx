import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TrainingPage from './pages/TrainingPage';
import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/trainings" element={<TrainingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
