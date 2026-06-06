import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4 inline-flex">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary-600 to-accent-500 flex items-center justify-center">
                <span className="font-display font-bold text-white text-sm">N</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white">
                NEXUS'26
              </span>
            </Link>
            <p className="text-text-mid max-w-sm mb-6">
              India's most ambitious entrepreneurship and technology summit. Where builders become legends.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">X</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">in</a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">Ig</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-text-mid hover:text-white transition-colors">Dashboard</Link></li>
              <li><a href="#" className="text-text-mid hover:text-white transition-colors">Registration</a></li>
              <li><a href="#" className="text-text-mid hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#" className="text-text-mid hover:text-white transition-colors">Merchandise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-mid hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-text-mid hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-text-mid hover:text-white transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-low text-sm">
            © 2026 NEXUS Summit. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span className="text-text-low text-sm">All Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
