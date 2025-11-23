import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import { EpicorPage } from './pages/EpicorPage';
import { IscalaPage } from './pages/IscalaPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/epicor" element={<EpicorPage />} />
          <Route path="/iscala" element={<IscalaPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;