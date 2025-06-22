import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import ListingDetails from './pages/ListingDetails';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HostPage from './pages/HostPage';
import GetStartedPage from './pages/GetStartedPage';
import HelpCenter from './pages/HelpCenter';
import Cancellation from './pages/Cancellation';
import ReportConcern from './pages/ReportConcern';
import Careers from './pages/Careers';
import SafetyInfo from './pages/SafetyInfo';
import NewsPage from './pages/NewsPage';
import InvestorsPage from './pages/InvestorsPage';
import TermsPage from './pages/TermsPage';
import CommunityProgramPage from './pages/CommunityProgramPage';
import HostResourcesPage from './pages/HostResourcesPage';
import HostingResponsiblyPage from './pages/HostingResponsiblyPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TravelAssistantPanel from './components/TravelAssistantPanel';
import AIAssistantFloatingButton from './components/AIAssistantFloatingButton';

function App() {
  const [isAssistantOpen, setAssistantOpen] = useState(false);
  const location = useLocation();
  const showGlobalUI = location.pathname !== '/';
  const showFooter = showGlobalUI &&
                      location.pathname !== '/login' && 
                      location.pathname !== '/signup' && 
                      location.pathname !== '/get-started';

  const pageContentStyle = {
    transition: 'margin-right 0.4s ease-in-out',
    marginRight: isAssistantOpen && showGlobalUI ? '405px' : '0',
  };

  return (
    <div className="app-container">
      <div style={pageContentStyle}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {showGlobalUI && <Navbar toggleAssistant={() => setAssistantOpen(!isAssistantOpen)} />}
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/listing/:id" element={<ListingDetails />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/become-a-host" element={<HostPage />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/report-concern" element={<ReportConcern />} />
              <Route path="/safety" element={<SafetyInfo />} />
              <Route path="/cancellation" element={<Cancellation />} />
              <Route path="/get-started" element={<GetStartedPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/investors" element={<InvestorsPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/community-program" element={<CommunityProgramPage />} />
              <Route path="/host-resources" element={<HostResourcesPage />} />
              <Route path="/hosting-responsibly" element={<HostingResponsiblyPage />} />
            </Routes>
          </main>
          {showFooter && <Footer isAssistantOpen={isAssistantOpen} />}
        </div>
      </div>

      {showGlobalUI && (
        <>
          <AIAssistantFloatingButton 
            onClick={() => setAssistantOpen(true)} 
            style={{ display: isAssistantOpen ? 'none' : 'flex' }} 
          />
          <TravelAssistantPanel 
            isOpen={isAssistantOpen} 
            onClose={() => setAssistantOpen(false)} 
          />
        </>
      )}
    </div>
  );
}

export default App; 