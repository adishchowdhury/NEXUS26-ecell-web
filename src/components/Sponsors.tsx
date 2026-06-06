import { motion } from 'motion/react';

const sponsors = [
  { name: "Google", tier: "Titanium" },
  { name: "Vercel", tier: "Titanium" },
  { name: "Stripe", tier: "Platinum" },
  { name: "Supabase", tier: "Platinum" },
  { name: "GitHub", tier: "Gold" },
  { name: "Figma", tier: "Gold" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-32 relative z-10 bg-space">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            BACKED BY <span className="text-hot-pink text-glow-pink">INTELLIGENCE</span>
          </h2>
          <p className="text-white/60 font-sans tracking-wide">The giants empowering the next generation.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card relative flex flex-col items-center justify-center p-12 h-full border border-white/5 group overflow-hidden cursor-default transition-colors duration-300 hover:border-electric/30 hover:shadow-[0_0_30px_rgba(0,245,255,0.15)]"
              >
                {/* Holographic ambient background layers on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,245,255,0.2)_0%,transparent_70%),radial-gradient(ellipse_at_bottom_right,rgba(255,0,127,0.2)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen" />
                
                {/* Diagonal shimmering sweep effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out pointer-events-none mix-blend-overlay"
                  style={{
                    background: 'linear-gradient(90deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)',
                    transform: 'skewX(-25deg)'
                  }}
                />
                
                <div className="font-display font-black text-2xl md:text-3xl tracking-[2px] text-white/50 group-hover:text-white transition-all duration-300 z-10 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                  {sponsor.name.toUpperCase()}
                </div>
                <div className="absolute bottom-4 font-sans text-[10px] font-bold uppercase tracking-[2px] text-white/30 group-hover:text-electric transition-colors duration-300 z-10">
                  {sponsor.tier} Partner
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
