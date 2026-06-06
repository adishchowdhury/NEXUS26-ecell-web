import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { AmusementPark3D } from '../animations/AmusementPark3D';
import { ChevronDown, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030712]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Aurora Glow Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7C3AED] rounded-full blur-[180px] opacity-20 pointer-events-none z-0 transform -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00F5FF] rounded-full blur-[180px] opacity-10 pointer-events-none z-0 transform translate-x-1/4 translate-y-1/4"></div>

      {/* 3D Background */}
      <AmusementPark3D />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-semibold mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
          <span className="uppercase tracking-wider">
            Registration Now Open
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring' }}
          className="text-6xl md:text-[92px] leading-[0.9] font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
        >
          NEXUS<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600">'26</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl font-bold text-white max-w-3xl mb-4"
        >
          Where Builders Become Legends
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          India's most ambitious entrepreneurship and technology summit. 
          Experience a three-day journey of innovation, deep tech, and startup building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link to="/dashboard">
            <Button size="lg" className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all border-none font-sans">
              Register Now
            </Button>
          </Link>
          <a href="#events">
            <Button size="lg" className="px-6 py-2.5 bg-white/10 text-white text-sm font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 font-sans backdrop-blur-md">
              Explore Events
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20"
      >
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
        <span className="rotate-90 text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase origin-center whitespace-nowrap">Scroll to Navigate</span>
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      </motion.div>
      
      {/* Premium Vignette Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_150px_rgba(3,7,18,0.8)] mix-blend-multiply" />
    </section>
  );
}
