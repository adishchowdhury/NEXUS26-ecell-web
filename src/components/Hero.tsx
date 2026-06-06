import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export default function Hero({ onRegisterClick }: HeroProps) {
  const { scrollY } = useScroll();
  
  // Custom parallax offsets for hero elements
  const aurora1Y = useTransform(scrollY, [0, 800], [0, 200]);
  const aurora2Y = useTransform(scrollY, [0, 800], [0, -150]);
  const contentY = useTransform(scrollY, [0, 600], [0, 100]);
  const shape1Y = useTransform(scrollY, [0, 600], [0, -150]);
  const shape2Y = useTransform(scrollY, [0, 600], [0, 250]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Gradients / Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
           style={{ y: aurora1Y }}
           className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-30 mix-blend-screen filter blur-[80px] bg-neon-purple animate-aurora z-0" 
        />
        <motion.div 
           style={{ y: aurora2Y, animationDelay: '-5s' }}
           className="absolute bottom-[-50px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-20 mix-blend-screen filter blur-[80px] bg-electric animate-aurora z-0" 
        />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none"></div>

      <motion.div style={{ y: contentY }} className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
          <span className="font-mono text-xs font-semibold tracking-widest text-white/80">VIRTUAL & IRL • OCT 24-26, 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="font-display text-7xl md:text-[130px] leading-[0.9] uppercase tracking-[-4px] mb-4 relative"
        >
          <span className="block">HACK<span className="text-electric" style={{ WebkitTextStroke: '1px var(--color-electric)', WebkitTextFillColor: 'transparent' }}>IE³</span></span>
          <span className="block text-4xl md:text-[80px] mt-2 opacity-90">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-lg md:text-2xl text-white/70 font-sans tracking-[4px] uppercase opacity-80 mb-10"
        >
          Code. Create. Conquer Infinity. Uncage your potential at the most immersive global hackathon.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
           className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-2xl"
        >
           <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[1px] text-electric">Neural Networks</div>
           <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[1px] text-electric">Web3 Core</div>
           <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[1px] text-electric">Quantum Computing</div>
           <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[1px] text-electric">Bio-Tech</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button 
            onClick={onRegisterClick}
            className="group relative inline-flex items-center justify-center px-12 py-5 font-sans font-black text-lg tracking-[2px] text-space bg-electric rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,245,255,0.4)] uppercase"
          >
            <span className="relative flex items-center gap-2">
              REGISTER NOW
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <a href="#about" className="inline-flex items-center justify-center px-12 py-5 font-sans font-black text-lg tracking-[2px] text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors uppercase">
            EXPLORE EVENT
          </a>
        </motion.div>
      </motion.div>

      {/* Floating 3D Elements (Simulated and Parallaxed) */}
      <motion.div 
        style={{ y: shape1Y }}
        className="absolute top-[30%] left-[10%] w-24 h-24 hidden lg:block opacity-60 backdrop-blur-md"
      >
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full border border-hot-pink/30 rounded-xl glass-card"
        />
      </motion.div>
      
      <motion.div 
        style={{ y: shape2Y }}
        className="absolute bottom-[20%] right-[15%] w-32 h-32 hidden lg:block opacity-50 backdrop-blur-md"
      >
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-full h-full border border-electric/30 rounded-full glass-card"
        />
      </motion.div>
    </section>
  );
}
