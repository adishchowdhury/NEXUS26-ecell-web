import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, Zap } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function StudentPass3D() {
  const cardRef = useRef<HTMLDivElement>(null):
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useAuth();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div className="perspective-1000 w-full max-w-sm mx-auto">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ 
          rotateX, 
          rotateY,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full aspect-[1/1.6] bg-gradient-to-br from-[#111827] to-[#030712] rounded-3xl border border-white/20 p-6 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
      >
        {/* Glow Effects Behind Content */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-[#7C3AED]/50 rounded-full blur-[60px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#00F5FF]/30 rounded-full blur-[50px]" />
        </div>

        {/* Dynamic Glare */}
        {isHovered && (
          <div 
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 50%)`,
            }}
          />
        )}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 z-10 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px', transform: 'translateZ(1px)' }}></div>

        {/* Content (elevated in 3D) */}
        <div className="relative z-20 h-full flex flex-col justify-between" style={{ transform: "translateZ(40px)" }}>
          
          <div className="flex justify-between items-start">
            <div>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#00F5FF] flex items-center justify-center mb-3 shadow-lg shadow-purple-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <span className="font-display font-bold tracking-tighter text-2xl text-white">NEXUS'26</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#00F5FF] shadow-lg backdrop-blur-md">
                Student Elite
              </span>
              <div className="flex items-center gap-1 mt-2 text-[#00F5FF]">
                <Zap className="w-3 h-3 fill-[#00F5FF]" />
                <span className="text-[10px] font-bold uppercase">All Access</span>
              </div>
            </div>
          </div>

          <div className="my-auto flex flex-col items-center">
             <div className="w-40 h-40 bg-white rounded-2xl p-2 mb-4 shadow-[0_0_30px_rgba(0,245,255,0.2)] flex items-center justify-center">
               <QrCode className="w-full h-full text-black" strokeWidth={1} />
             </div>
             <p className="font-mono text-gray-400 text-sm tracking-widest bg-black/50 px-4 py-1 rounded-full border border-white/10">NXS-{user ? user.uid.substring(0,4).toUpperCase() : '8492'}-MK2</p>
          </div>

          <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-4">
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Pass Holder</span>
              <span className="text-lg font-bold text-white block">{user?.displayName || 'Builder'}</span>
            </div>
            
            <div className="text-right">
               <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Valid Thru</span>
               <span className="text-lg font-bold text-white block font-mono">10/26</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
