import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';

const speakers = [
  {
    name: "Sam Altman",
    company: "OpenAI",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Aparna Chennapragada",
    company: "Microsoft",
    role: "CVP",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "Kunal Shah",
    company: "CRED",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    color: "from-amber-500 to-orange-400"
  },
];

function SpeakerCard({ speaker, index }: { speaker: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Tilt calculations
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative perspective-1000 w-full aspect-[3/4]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full h-full relative transform-style-3d glass-panel rounded-3xl overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
        <div className={`absolute inset-0 bg-gradient-to-br ${speaker.color} mix-blend-overlay opacity-50 z-10`} />
        
        <img 
          src={speaker.image} 
          alt={speaker.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
        />

        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">
            {speaker.name}
          </h3>
          <p className="text-text-mid font-medium mb-1 group-hover:translate-x-2 transition-transform duration-300 delay-75">
            {speaker.role}
          </p>
          <div className="text-white/50 text-sm font-semibold tracking-wider uppercase group-hover:translate-x-2 transition-transform duration-300 delay-100">
            {speaker.company}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 relative bg-background-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Legendary Speakers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-mid text-lg max-w-xl"
            >
              Learn directly from those who have built unicorns, defined industries, and reshaped the world.
            </motion.p>
          </div>
          
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-400 font-medium hover:text-primary-300 mt-6 md:mt-0 flex items-center gap-2 group"
          >
            View Full Lineup
            <div className="w-8 h-8 rounded-full border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/20 transition-all">
              +
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
