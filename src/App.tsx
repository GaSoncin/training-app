import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import TrainingJourney from "./pages/TrainingJourney/TrainingJourney";
import "./App.css";
import IAPage from "./pages/IAPage/IAPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/trainings" element={<TrainingPage />} />
        <Route path="/journey" element={<TrainingJourney />} />
        <Route path="/iapage" element={<IAPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;