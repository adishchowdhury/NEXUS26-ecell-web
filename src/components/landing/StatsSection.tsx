import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

function StatItem({ value, label, delay }: { value: string, label: string, delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, type: "spring" }}
      className="flex flex-col items-center justify-center p-8 glass-panel rounded-3xl relative overflow-hidden group"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-500" />
      <div className="absolute -inset-[100%] top-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

      <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
        {value}
      </h3>
      <p className="text-text-mid font-medium uppercase tracking-widest text-sm text-center">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    { value: "15,000+", label: "Participants", delay: 0.1 },
    { value: "120+", label: "Speakers", delay: 0.2 },
    { value: "50+", label: "Startups", delay: 0.3 },
    { value: "₹25L", label: "Prize Pool", delay: 0.4 },
  ];

  return (
    <section className="py-24 relative z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 md:gap-16">
              <div className="flex flex-col">
                <span className="text-3xl md:text-5xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-white/10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
