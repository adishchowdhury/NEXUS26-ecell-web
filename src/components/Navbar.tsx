import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(11, 15, 47, 0)', 'rgba(11, 15, 47, 0.8)']
  );

  const navBackdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: navBackdropFilter,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group font-display text-3xl tracking-[2px] uppercase">
          <span className="text-electric border-2 border-electric px-2 pb-0.5 rounded">H</span>
          ACKIE³
        </a>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-electric transition-colors">ABOUT</a>
          <a href="#schedule" className="hover:text-electric transition-colors">SCHEDULE</a>
          <a href="#sponsors" className="hover:text-electric transition-colors">SPONSORS</a>
          <a href="#location" className="hover:text-electric transition-colors">LOCATION</a>
        </div>

        <button
          onClick={onRegisterClick}
          className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-transparent border border-electric/50 hover:border-electric transition-colors"
        >
          <div className="absolute inset-0 w-0 bg-electric group-hover:w-full transition-all duration-300 ease-out" />
          <span className="relative z-10 font-display text-sm font-bold tracking-wider group-hover:text-space transition-colors">
            REGISTER
          </span>
        </button>
      </div>
    </motion.nav>
  );
}
