import { motion } from 'motion/react';

const phases = [
  { id: "01", title: "Registration", date: "Jan 15 - Feb 10", desc: "Secure your spot. Early birds get priority access." },
  { id: "02", title: "Selection", date: "Feb 15", desc: "Top 15,000 participants selected based on profiles." },
  { id: "03", title: "Mentorship", date: "March 1 - April 10", desc: "Virtual masterclasses with industry veterans." },
  { id: "04", title: "Finale", date: "June 6 - 8", desc: "The Ultimate 3-day Summit in Bangalore." },
];

export function TimelineSection() {
  return (
    <section className="py-24 relative bg-background-975 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center"
        >
          Road to NEXUS'26
        </motion.h2>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="bg-background-975 border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors group">
                  <div className="text-6xl font-display font-bold text-white/5 group-hover:text-primary-500/20 transition-colors absolute -top-4 -right-4 pointer-events-none select-none">
                    {phase.id}
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-[#030712] border-2 border-primary-500 flex items-center justify-center font-bold text-primary-400 mb-6 lg:absolute lg:-top-6 lg:left-8 lg:mb-0 hidden lg:flex shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                    {phase.id}
                  </div>

                  <div className="mt-2 lg:mt-8">
                    <span className="text-accent-400 text-sm font-bold tracking-wider uppercase mb-2 block">{phase.date}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-text-mid text-sm">{phase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
