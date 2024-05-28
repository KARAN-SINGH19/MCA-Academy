import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import About from './Screens/About';
import HRAcademy from './Screens/HRAcademy';
import SupplyChainAcademy from './Screens/SupplyChainAcademy';
import CoachingandMentoring from './Screens/CoachingandMentoring';
import Leadership from './Screens/UnlockingAuthenticLeadership';
import Empowerment from './Screens/EmpoweringWomenLeadersForSuccess';
import Skills from './Screens/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/HRAcademy' element={<HRAcademy />} />
        {/* <Route exact path='/FinanceAcademy' element={<FinanceAcademy />} /> */}
        {/* <Route exact path='/ProjectManagementAcademy' element={<ProjectManagementAcademy />} /> */}
        <Route exact path='/SupplyChainAcademy' element={<SupplyChainAcademy />} />
        <Route exact path='/CoachingandMentoring' element={<CoachingandMentoring />} />
        <Route exact path='/UnlockingAuthenticLeadership' element={<Leadership />} />
        <Route exact path='/EmpoweringWomenLeadersForSuccess' element={<Empowerment />} />
        <Route exact path='/EntrepreneurialExcellence-Skillsandmindset' element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
