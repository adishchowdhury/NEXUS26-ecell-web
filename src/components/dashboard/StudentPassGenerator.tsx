import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fingerprint, Cpu, CheckCircle2, RotateCw } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';

export function StudentPassGenerator() {
  const { setHasPass } = useStore();
  const { user } = useAuth();
  const [step, setStep] = useState<'idle' | 'scanning' | 'generating' | 'done'>('idle');

  const startGeneration = () => {
    setStep('scanning');
    setTimeout(() => {
      setStep('generating');
      setTimeout(() => {
        setStep('done');
        setTimeout(() => {
          setHasPass(true);
        }, 1500);
      }, 2500);
    }, 2000);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#7C3AED]/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#00F5FF]/20 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {step === 'idle' && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(124,58,237,0.3)] border border-white/20">
                <Fingerprint className="w-10 h-10 text-[#00F5FF]" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-2">Claim Your Identity</h3>
              <p className="text-gray-400 text-sm mb-8">Generate your secure, cryptographic NEXUS student pass to access the summit.</p>
              
              <Button onClick={startGeneration} className="w-full bg-[#7C3AED] hover:bg-[#8B5CF6] text-white border-0 py-4 shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                Generate Elite Pass
              </Button>
            </motion.div>
          )}

          {step === 'scanning' && (
            <motion.div 
              key="scanning"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }}
              className="flex flex-col items-center py-8"
            >
              <div className="relative w-24 h-24 mb-6">
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-t-[#00F5FF] border-r-transparent border-b-[#7C3AED] border-l-transparent rounded-full"
                />
                <img src={user?.photoURL || ''} alt="User" className="absolute inset-2 rounded-full object-cover filter grayscale opacity-50" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1 tracking-widest uppercase">Scanning Profile</h3>
              <p className="text-xs text-gray-500 font-mono">Verifying identity vectors for {user?.email}...</p>
            </motion.div>
          )}

          {step === 'generating' && (
            <motion.div 
              key="generating"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col items-center py-8"
            >
              <div className="w-20 h-20 bg-[#00F5FF]/10 rounded-xl mb-6 flex items-center justify-center border border-[#00F5FF]/50 shadow-[0_0_30px_rgba(0,245,255,0.4)]">
                <Cpu className="w-10 h-10 text-[#00F5FF] animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1 tracking-widest uppercase">Minting Pass</h3>
              <p className="text-xs text-gray-500 font-mono">Cryptographic signature generation...</p>
              
              <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-[#7C3AED] to-[#00F5FF]"
                />
              </div>
            </motion.div>
          )}

          {step === 'done' && (
            <motion.div 
              key="done"
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                className="w-20 h-20 bg-emerald-500/20 rounded-full mb-6 flex items-center justify-center border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </motion.div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">Access Granted</h3>
              <p className="text-sm text-emerald-400 font-mono">Pass generated successfully.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
