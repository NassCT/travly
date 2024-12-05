import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/NavBar" element={<NavBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
