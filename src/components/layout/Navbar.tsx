import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ShoppingBag } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useAuth } from '../../contexts/AuthContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cart, setCartOpen } = useStore();
  const navigate = useNavigate();
  const { user, login, logout, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#00F5FF] rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            NEXUS<span className="text-[#00F5FF]">'26</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {['Events', 'Speakers', 'Schedule', 'Merchandise'].map((item) => (
            <Link
              key={item}
              to={item === 'Merchandise' ? '/merchandise' : `/#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-full gap-2 text-xs text-gray-400">
            <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">⌘ K</span>
            <span>Search events</span>
          </div>
          
          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-gray-400 hover:text-white transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#00F5FF] text-black text-[10px] font-bold flex items-center justify-center border-2 border-[#030712] translate-x-1 -translate-y-1">
                {totalItems}
              </span>
            )}
          </button>

          {!loading && user ? (
            <>
              <Link to="/dashboard">
                <Button size="sm" className="hidden md:flex px-4 py-2 bg-transparent text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-bold rounded-full font-sans shadow-none border-none">
                  Dashboard
                </Button>
              </Link>
              <Button onClick={() => { logout(); navigate('/'); }} size="sm" className="px-6 py-2.5 bg-white/10 text-white text-sm font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 font-sans shadow-none border-none">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => login()} size="sm" className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all border-none font-sans shadow-none">
                Sign In
              </Button>
            </>
          )}
        </div>
      </div>
    </motion.header>
  );
}
