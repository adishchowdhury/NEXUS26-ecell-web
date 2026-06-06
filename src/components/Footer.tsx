export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-space shrink-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-bold text-xl tracking-wider text-white">
            HackIE<span className="text-electric align-super text-xs">3</span>
          </span>
          <div className="font-sans text-xs text-white/40 tracking-widest uppercase text-center md:text-left space-y-1 mt-1">
            <p>© 2026 Infinity Systems. All rights reserved.</p>
            <p className="text-white/60">Created with &lt;3 by Adrija Chowdhury</p>
          </div>
        </div>
        
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-white/50">
          <a href="#" className="hover:text-electric transition-colors">Twitter</a>
          <a href="#" className="hover:text-hot-pink transition-colors">Discord</a>
          <a href="#" className="hover:text-neon-purple transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
