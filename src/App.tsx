import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import BookingPage from './pages/BookingPage';
import TailorProfile from './pages/TailorProfile';
import TrackingPage from './pages/TrackingPage';
import PaymentPage from './pages/PaymentPage';
import QuickFixButton from './components/QuickFixButton';

type Page = 'landing' | 'login' | 'signup' | 'dashboard' | 'booking' | 'tailors' | 'tracking' | 'payment';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [showQuickFix, setShowQuickFix] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setShowQuickFix(page !== 'landing' && page !== 'login' && page !== 'signup');
  };

  const handleQuickFix = () => {
    setCurrentPage('booking');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'login':
        return <AuthPage mode="login" onNavigate={handleNavigate} />;
      case 'signup':
        return <AuthPage mode="signup" onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'booking':
        return <BookingPage onNavigate={handleNavigate} />;
      case 'tailors':
        return <TailorProfile onNavigate={handleNavigate} />;
      case 'tracking':
        return <TrackingPage onNavigate={handleNavigate} />;
      case 'payment':
        return <PaymentPage onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {renderPage()}
      {showQuickFix && <QuickFixButton onClick={handleQuickFix} />}
    </>
  );
}

export default App;
