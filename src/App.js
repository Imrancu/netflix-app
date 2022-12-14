import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="App">
      <Routes>
        {!user ? <Route path="/" element={<LoginScreen/>} /> : <Route path="/" element={<HomeScreen />} />}
      </Routes>
    </div>
  );
}

export default App;
