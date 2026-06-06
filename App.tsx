import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import MerchandisePage from './pages/MerchandisePage';
import { CartDrawer } from './components/ui/CartDrawer';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background-975 text-white selection:bg-primary-500/30 font-sans">
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/merchandise" element={<MerchandisePage />} />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}
