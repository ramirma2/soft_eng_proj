
import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import ProviderLookupPage from './components/ProviderLookupPage';
import PatientIntakePage from './components/PatientIntakePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/provider-search" element={<ProviderLookupPage/>}></Route>
            <Route path="/patient-intake" element={<PatientIntakePage/>}></Route>
        </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
