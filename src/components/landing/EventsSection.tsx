import { motion } from 'motion/react';
import { ArrowUpRight, Terminal, Rocket, Cpu, Users, Briefcase, Zap } from 'lucide-react';

const events = [
  {
    title: "Hackathon",
    desc: "48 hours to build the future. ₹10L total prize pool.",
    icon: Terminal,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    rowSpan: "row-span-2",
    color: "from-primary-600/20 to-primary-900/40",
    border: "group-hover:border-primary-500/50"
  },
  {
    title: "Startup Pitch",
    desc: "Pitch directly to top-tier VC firms.",
    icon: Rocket,
    colSpan: "col-span-1 lg:col-span-1",
    rowSpan: "row-span-1",
    color: "from-accent-600/20 to-accent-900/40",
    border: "group-hover:border-accent-400/50"
  },
  {
    title: "AI Challenge",
    desc: "Solve real world problems with LLMs and Computer Vision.",
    icon: Cpu,
    colSpan: "col-span-1 lg:col-span-1",
    rowSpan: "row-span-1",
    color: "from-emerald-600/20 to-emerald-900/40",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Workshops",
    desc: "Hands-on learning with industry experts.",
    icon: Briefcase,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    rowSpan: "row-span-1",
    color: "from-blue-600/20 to-blue-900/40",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Networking",
    desc: "Connect with 15k+ ambitious builders.",
    icon: Users,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-1",
    color: "from-pink-600/20 to-pink-900/40",
    border: "group-hover:border-pink-500/50"
  },
  {
    title: "Investors Meet",
    desc: "Closed door 1:1 sessions.",
    icon: Zap,
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    rowSpan: "row-span-1",
    color: "from-amber-600/20 to-amber-900/40",
    border: "group-hover:border-amber-500/50"
  }
];

export function EventsSection() {
  return (
    <section id="events" className="py-24 relative bg-background-975">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Flagship Events
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-mid text-lg max-w-2xl"
          >
            Compete, learn, and grow. Six distinct tracks designed to push your limits and accelerate your trajectory.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {events.map((evt, i) => (
            <motion.div
              key={evt.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 0.98 }}
              className={`group bg-white/5 bg-gradient-to-br border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden ${evt.colSpan} ${evt.rowSpan} transition-all duration-300 hover:border-white/20`}
            >
              <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <evt.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#00F5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>EXPLORE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-bold text-white mb-1">{evt.title}</h3>
                <p className="text-xs text-gray-400">{evt.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
