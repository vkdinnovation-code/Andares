import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Additional routes for inner pages would go here, 
            but for the landing page demo, we route everything to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
