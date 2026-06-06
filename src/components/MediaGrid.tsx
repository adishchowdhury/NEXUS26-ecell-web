import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const mediaSources = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Cyber setup
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800", // Matrix code
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", // Tech crowd
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", // Chip
];

export default function MediaGrid() {
  return (
    <section className="py-20 bg-[#070A1F] relative z-10 border-y border-white/5">
      <div className="max-w-[1600px] mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl">THE <span className="text-lime text-glow">ENERGY</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mediaSources.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="group relative aspect-video md:aspect-[4/5] overflow-hidden rounded-2xl bg-space-lighter cursor-pointer border border-white/5"
            >
              <img 
                src={src} 
                alt="Hackathon Energy" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F2F] via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150 group-hover:scale-100">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="font-display font-bold text-lg mb-1 tracking-wider">MOMENT {idx + 1}</div>
                <div className="font-sans text-sm text-electric italic">Witness the chaos.</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
