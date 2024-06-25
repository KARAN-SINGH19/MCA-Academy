import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import About from './Screens/About';
import HRAcademy from './Screens/HRAcademy';
import SupplyChainAcademy from './Screens/SupplyChainAcademy';
import CoachingandMentoring from './Screens/CoachingandMentoring';
import Finance from './Screens/Finance';
import Skills from './Screens/Skills';
import UnlockingAuthenticLeadership from './Screens/UnlockingAuthenticLeadership';
import EmpoweringWomenLeadersForSuccess from './Screens/EmpoweringWomenLeadersForSuccess';
import Fostering from './Screens/Fostering';
import Coaching from './Screens/Coaching';
import ContactUs from './Screens/ContactUs';

// import FinancialReporting from './Screens/FinancialReporting';
// import GrowthProgram from './Screens/GrowthProgram';
// import Budgeting from './Screens/Budgeting';
// import Modeling from './Screens/Modeling';
// import WorkingCapital from './Screens/WorkingCapital';
// import DecisionMaking from './Screens/DecisionMaking';
// import Credit from './Screens/Credit';

import Unlocking from './Screens/Unlocking';
import Harmony from './Screens/Harmony';

import Stratergy from './Screens/Stratergy';
import Global from './Screens/Global';
import Leading from './Screens/Leading';

import Leadership from './Screens/Leadership';
import Emerging from './Screens/Emerging';
import Development from './Screens/Development';
import Executive from './Screens/Executive';

// import HRBusiness from './Screens/HRBusiness';
// import HRAnalytics from './Screens/HRAnalytics';
// import YoungHR from './Screens/YoungHR';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/HRProgram' element={<HRAcademy />} />
        <Route exact path='/FinanceProgram' element={<Finance />} />
        <Route exact path='/SupplyChainProgram' element={<SupplyChainAcademy />} />
        <Route exact path='/CoachingandMentoring' element={<CoachingandMentoring />} />
        <Route exact path='/UnlockingAuthenticLeadership' element={<UnlockingAuthenticLeadership />} />
        <Route exact path='/EntrepreneurialExcellenceSkillsandmindset' element={<Skills />} />
        <Route exact path='/EmpoweringWomenLeadersForSuccess' element={<EmpoweringWomenLeadersForSuccess />} />
        <Route exact path='/FosteringFunctionalExpertise' element={<Fostering />} />
        <Route exact path='/CoachingforProfessionals' element={<Coaching />} />
        <Route exact path='/ContactUs' element={<ContactUs />} />


        {/* <Route exact path='/international-financial-reporting-standards' element={<FinancialReporting />} />
        <Route exact path='/growth-program-for-accountants' element={<GrowthProgram />} />
        <Route exact path='/budgeting-variance-analysis-modelling' element={<Budgeting />} />
        <Route exact path='/financial-modelling-advanced' element={<Modeling />} />
        <Route exact path='/working-capital-management' element={<WorkingCapital />} />
        <Route exact path='/finance-for-decision-making-for-non-finance' element={<DecisionMaking />} />
        <Route exact path='/credit-risk-analysis-modelling' element={<Credit />} /> */}

        {/* Women Pillar */}
        <Route exact path='/UnloackingMyProfessionalPresence' element={<Unlocking />} />
        <Route exact path='/HarmonyEmpoweringforbalance' element={<Harmony />} />

        {/* Skills Pillar */}
        <Route exact path='/StratergyandTransformation' element={<Stratergy />} />
        <Route exact path='/GlobalLeadershipandCrisisManagement' element={<Global />} />
        <Route exact path='/LeadingaBusinessinaVUCAWorld' element={<Leading />} />

        {/* Unlocking Pillar */}
        <Route exact path='/LeadershipandExecutivePresence' element={<Leadership />} />
        <Route exact path='/EmergingLeaderDevelopment' element={<Emerging />} />
        <Route exact path='/DevelopmentCenters' element={<Development />} />
        <Route exact path='/ExecutiveCoaching' element={<Executive />} />

        {/* <Route exact path='/hr-business-partnering-development-program' element={<HRBusiness />} />
        <Route exact path='/hr-analytics-for-data-driven-decision-making' element={<HRAnalytics />} />
        <Route exact path='/young-hr-professional-excellence-program' element={<YoungHR />} /> */}



      </Routes>
    </Router>
  );
}

export default App;




