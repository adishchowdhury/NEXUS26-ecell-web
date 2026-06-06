import { motion } from 'motion/react';
import { Terminal, Cpu, Globe, Rocket } from 'lucide-react';

const tracks = [
  { icon: <Cpu className="w-8 h-8 text-electric" />, title: "AI & ML", desc: "Build neural networks that push boundaries." },
  { icon: <Globe className="w-8 h-8 text-neon-purple" />, title: "Web3", desc: "Decentralize the future of the internet." },
  { icon: <Terminal className="w-8 h-8 text-lime" />, title: "DevTools", desc: "Create tools that developers love." },
  { icon: <Rocket className="w-8 h-8 text-hot-pink" />, title: "SpaceTech", desc: "Solutions for the final frontier." }
];

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            WHAT IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-neon-purple text-glow">HACKIE³</span>?
          </h2>
          <p className="text-lg text-white/70 font-sans tracking-wide leading-relaxed mb-8">
            HackIE³ is not just a hackathon. It is a 48-hour collision of the brightest minds, 
            designed to incubate ideas that defy logic. Whether you are a seasoned hacker or 
            a visionary designer, this is your arena to innovate, elevate, and reach infinity.
          </p>
          
          <div className="flex gap-12 font-display">
            <div>
              <div className="text-4xl font-black text-electric">48<span className="text-2xl text-white/50">H</span></div>
              <div className="text-xs tracking-widest text-white/50 uppercase mt-2">Duration</div>
            </div>
            <div>
              <div className="text-4xl font-black text-hot-pink">$100<span className="text-2xl text-white/50">k</span></div>
              <div className="text-xs tracking-widest text-white/50 uppercase mt-2">Prizes</div>
            </div>
            <div>
              <div className="text-4xl font-black text-neon-purple">5k<span className="text-2xl text-white/50">+</span></div>
              <div className="text-xs tracking-widest text-white/50 uppercase mt-2">Hackers</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl border border-white/5 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-4 bg-space p-3 rounded-lg inline-block">{track.icon}</div>
                <h3 className="font-display font-bold text-xl mb-2">{track.title}</h3>
                <p className="text-sm text-white/60 font-sans">{track.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
