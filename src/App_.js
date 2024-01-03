import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Jokes from './components/Jokes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='jokes-container'>
          <Routes>
            <Route index element={<Jokes />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
