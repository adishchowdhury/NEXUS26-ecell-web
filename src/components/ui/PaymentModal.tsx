import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Loader2, CreditCard, X, ExternalLink } from 'lucide-react';
import { Button } from './Button';

interface PaymentModalProps {
  amount: number;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function PaymentModal({ amount, isOpen, onClose, onSuccess }: PaymentModalProps) {
  const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');

  useEffect(() => {
    if (isOpen) {
      setStep('details');
    }
  }, [isOpen]);

  const handlePay = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 2000);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-full max-w-md bg-[#ffffff] rounded-2xl overflow-hidden shadow-2xl relative z-10 font-sans"
          >
            {/* Header */}
            <div className="bg-[#02042B] p-6 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                  {/* Fake Razorpay Logo */}
                  <div className="w-5 h-5 bg-[#0A2885] rounded-sm transform rotate-45" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Razorpay</h3>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold bg-emerald-400/20 px-2 py-0.5 rounded">Test Mode</span>
                </div>
              </div>
              <button onClick={onClose} className="relative z-10 p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {step === 'details' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm mb-1">Total Amount to Pay</p>
                    <p className="text-4xl font-bold text-gray-900">₹{amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      100% Secure Transaction
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 border border-blue-500 bg-blue-50 rounded-xl flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-bold text-gray-900">Test Card</p>
                          <p className="text-xs text-gray-500">4111 1111 1111 1111</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border-4 border-blue-500 bg-white" />
                    </div>
                  </div>

                  <Button onClick={handlePay} className="w-full py-4 text-lg font-bold bg-[#0A2885] text-white hover:bg-[#06195A] rounded-xl shadow-lg shadow-blue-500/30">
                    Pay Now
                  </Button>
                </motion.div>
              )}

              {step === 'processing' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex flex-col items-center justify-center">
                  <Loader2 className="w-12 h-12 text-[#0A2885] animate-spin mb-4" />
                  <p className="text-lg font-bold text-gray-900">Processing Payment</p>
                  <p className="text-sm text-gray-500">Please do not close this window</p>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  className="py-12 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-emerald-500" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">Payment Successful</p>
                  <p className="text-sm text-gray-500 text-center">Redirecting you back to the merchant...</p>
                </motion.div>
              )}
            </div>
            
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4" /> Powered by Razorpay
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
