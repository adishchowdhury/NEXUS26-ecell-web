import { motion } from 'motion/react';
import { X, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

interface RegistrationModalProps {
  onClose: () => void;
}

export default function RegistrationModal({ onClose }: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [hoverArea, setHoverArea] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-space/80 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl glass-card border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,245,255,0.1)]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-20 p-2 rounded-full hover:bg-white/5"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric via-neon-purple to-hot-pink" />

        <div className="p-10 md:p-14">
          <div className="mb-10">
            <h3 className="font-display font-black text-3xl mb-2">
              INITIATE <span className="text-electric">SEQUENCE</span>
            </h3>
            <p className="font-sans text-white/60 text-sm tracking-wide">
              Secure your slot in the grand nexus. Step {step} of 2.
            </p>
          </div>

          <div className="space-y-6">
            {step === 1 ? (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-white/50 block">Alias / Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 font-sans text-white placeholder-white/20 focus:outline-none focus:border-electric transition-colors focus:shadow-[0_0_15px_rgba(0,245,255,0.2)]"
                    placeholder="Enter your handle"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-white/50 block">Comms Link (Email)</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 font-sans text-white placeholder-white/20 focus:outline-none focus:border-neon-purple transition-colors focus:shadow-[0_0_15px_rgba(138,43,226,0.2)]"
                    placeholder="name@domain.com"
                  />
                </div>
                
                <button 
                  onClick={() => setStep(2)}
                  onMouseEnter={() => setHoverArea(true)}
                  onMouseLeave={() => setHoverArea(false)}
                  className="w-full py-4 mt-4 rounded-xl bg-white text-space font-display font-bold tracking-widest hover:bg-electric transition-colors flex items-center justify-center gap-2 group"
                >
                  CONTINUE
                  <ArrowRight className={`w-5 h-5 transition-transform ${hoverArea ? 'translate-x-1' : ''}`} />
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-white/50 block">Primary Class</label>
                  <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 font-sans text-white focus:outline-none focus:border-hot-pink transition-colors appearance-none cursor-pointer">
                    <option className="bg-space text-white" value="">Select your discipline</option>
                    <option className="bg-space text-white" value="frontend">Frontend Wizard</option>
                    <option className="bg-space text-white" value="backend">Backend Architect</option>
                    <option className="bg-space text-white" value="design">UI/UX Visionary</option>
                    <option className="bg-space text-white" value="ai">AI Prompt Engineer</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="font-sans text-xs uppercase tracking-widest text-white/50 block">GitHub Neural Link</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 font-sans text-white placeholder-white/20 focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="github.com/..."
                  />
                </div>

                <button 
                  onClick={onClose}
                  className="w-full py-4 mt-4 rounded-xl bg-electric text-space font-display font-bold tracking-widest hover:brightness-110 shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                  SYSTEM.EXECUTE()
                  <Check className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
