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
import Finance from './Screens/Finance';
import FinancialReporting from './Screens/FinancialReporting';
import GrowthProgram from './Screens/GrowthProgram';
import Budgeting from './Screens/Budgeting';
import Modeling from './Screens/Modeling';
import WorkingCapital from './Screens/WorkingCapital';
import DecisionMaking from './Screens/DecisionMaking';
import Credit from './Screens/Credit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/HRAcademy' element={<HRAcademy />} />
        <Route exact path='/FinanceAcademy' element={<Finance />} />
        <Route exact path='/SupplyChainAcademy' element={<SupplyChainAcademy />} />
        <Route exact path='/CoachingandMentoring' element={<CoachingandMentoring />} />
        <Route exact path='/UnlockingAuthenticLeadership' element={<Leadership />} />
        <Route exact path='/EmpoweringWomenLeadersForSuccess' element={<Empowerment />} />
        <Route exact path='/EntrepreneurialExcellence-Skillsandmindset' element={<Skills />} />
        <Route exact path='/international-financial-reporting-standards' element={<FinancialReporting />} />
        <Route exact path='/growth-program-for-accountants' element={<GrowthProgram />} />
        <Route exact path='/budgeting-variance-analysis-modelling' element={<Budgeting />} />
        <Route exact path='/financial-modelling-advanced' element={<Modeling />} />
        <Route exact path='/working-capital-management' element={<WorkingCapital />} />
        <Route exact path='/finance-for-decision-making-for-non-finance' element={<DecisionMaking />} />
        <Route exact path='/credit-risk-analysis-modelling' element={<Credit />} />

      </Routes>
    </Router>
  );
}

export default App;
