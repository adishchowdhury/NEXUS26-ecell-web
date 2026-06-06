import { motion } from 'motion/react';
import { useState } from 'react';
import { Code, Coffee, Trophy, Users, Zap } from 'lucide-react';

const scheduleData = {
  day1: [
    { time: "09:00 AM", title: "Check-in & Swag", icon: <Users size={20} /> },
    { time: "11:00 AM", title: "Opening Ceremony", icon: <Zap size={20} /> },
    { time: "12:30 PM", title: "Hacking Begins", icon: <Code size={20} /> },
    { time: "08:00 PM", title: "Mentor Office Hours", icon: <Coffee size={20} /> },
  ],
  day2: [
    { time: "12:00 AM", title: "Midnight Pizza & Games", icon: <Coffee size={20} /> },
    { time: "01:00 PM", title: "Hacking Ends", icon: <Code size={20} /> },
    { time: "03:00 PM", title: "Judging & Demos", icon: <Users size={20} /> },
    { time: "06:00 PM", title: "Closing & Awards", icon: <Trophy size={20} /> },
  ]
};

export default function Timeline() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  return (
    <section id="schedule" className="py-32 relative z-10 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl">
          THE <span className="text-neon-purple text-glow">TIMELINE</span>
        </h2>
        
        <div className="flex bg-space-lighter rounded-full p-1 border border-white/10 w-fit">
          <button 
            onClick={() => setActiveDay('day1')}
            className={`px-6 py-2 rounded-full font-display text-sm tracking-widest transition-colors ${
              activeDay === 'day1' ? 'bg-neon-purple font-bold text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]' : 'text-white/50 hover:text-white'
            }`}
          >
            DAY 1
          </button>
          <button 
            onClick={() => setActiveDay('day2')}
            className={`px-6 py-2 rounded-full font-display text-sm tracking-widest transition-colors ${
              activeDay === 'day2' ? 'bg-neon-purple font-bold text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]' : 'text-white/50 hover:text-white'
            }`}
          >
            DAY 2
          </button>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-purple to-transparent opacity-50" />
        
        <div className="space-y-12">
          {scheduleData[activeDay].map((item, idx) => (
            <motion.div 
              key={`${activeDay}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex items-center md:justify-between flex-row ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:block w-5/12" />
              
              {/* Marker */}
              <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-space border-2 border-neon-purple flex items-center justify-center shadow-[0_0_10px_rgba(138,43,226,0.8)] z-10">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              <div className="w-full pl-16 md:pl-0 md:w-5/12">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 cursor-pointer group hover:border-neon-purple/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-white/5 rounded-lg text-neon-purple group-hover:text-electric transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-mono text-electric text-sm font-semibold tracking-wider">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
