import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function MapLocation() {
  return (
    <section id="location" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            THE <span className="text-electric text-glow">ARENA</span>
          </h2>
          <p className="text-white/60 font-sans tracking-wide">Sync offline in the physical node.</p>
        </motion.div>

        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden glass-card border border-white/10 group">
          {/* Simulated Dark Map Canvas using CSS */}
          <div className="absolute inset-0 bg-[#060814] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwb2x5Z29uIHBvaW50cz0iMjAsMCA0MCwyMCAyMCw0MCAwLDIwIiBmaWxsPSJzdHJva2U9InJnYmEoMCwgMjQ1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] opacity-80" />
          
          {/* Glowing routes simulation */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 50 Q 25 20, 50 50 T 100 50" fill="none" stroke="#8A2BE2" strokeWidth="0.5" className="animate-[dash_10s_linear_infinite]" strokeDasharray="5,5" />
            <path d="M 20 100 Q 50 50, 80 0" fill="none" stroke="#00F5FF" strokeWidth="0.2" />
          </svg>

          {/* Animated Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div 
               animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute inset-0 bg-electric rounded-full blur-[10px]"
            />
            <div className="relative z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_#00F5FF]">
               <div className="w-2 h-2 bg-electric rounded-full" />
            </div>
            {/* Glass panel info attached to marker */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 w-64 glass-card p-4 rounded-xl border border-electric/30 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-electric shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-white mb-1">JU Salt Lake Campus</h4>
                  <p className="font-sans text-xs text-white/50 mb-3">Block LB, Sector III, Salt Lake City, Kolkata.</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=22.5658,88.4126" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-[10px] text-electric uppercase tracking-widest hover:text-white transition-colors"
                  >
                    <Navigation className="w-3 h-3" /> 22.5658° N, 88.4126° E
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
