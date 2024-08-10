import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './na'; // Ensure correct path to Nav component
import Universe from './universe'; // Import Universe component
import Scientist from './scientist'; // Import Scientist component
import './App.css';
import './drop.css';
import Scr from '../public/nav'; // Ensure correct path to Scr component
import Home from './home.jsx'
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add a home route */}
        <Route path="/universe" element={<Universe />} />
        <Route path="/scientist" element={<Scientist />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
