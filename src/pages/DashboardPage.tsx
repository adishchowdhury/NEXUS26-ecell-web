import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, Calendar, ShoppingBag, CreditCard, 
  Settings, Bell, Search, Menu, X, ArrowUpRight, CheckCircle2, Circle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { StudentPass3D } from '../components/dashboard/StudentPass3D';
import { StudentPassGenerator } from '../components/dashboard/StudentPassGenerator';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { Button } from '../components/ui/Button';
import { AmusementPark3D } from '../components/animations/AmusementPark3D';

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Calendar, label: "Schedule Builder" },
  { icon: CreditCard, label: "Payments" },
  { icon: ShoppingBag, label: "Merchandise" },
  { icon: Settings, label: "Settings" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, loading, login } = useAuth();
  const { hasPass } = useStore();
  const navigate = useNavigate();

  if (loading) {
    return <div className="min-h-screen bg-[#030712] flex items-center justify-center text-white">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-white relative overflow-hidden pt-20">
        <AmusementPark3D />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7C3AED]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="z-10 text-center max-w-md mx-auto px-6 backdrop-blur-md bg-black/40 p-10 rounded-3xl border border-white/10">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#7C3AED] to-[#00F5FF] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">Access Denied</h1>
          <p className="text-gray-400 mb-8">You need to sign in to generate your student pass and access the dashboard.</p>
          <Button onClick={login} className="w-full py-4 text-lg font-bold bg-white text-black hover:bg-gray-200">
            Sign In with Google
          </Button>
          <button onClick={() => navigate('/')} className="mt-4 text-sm text-gray-500 hover:text-white transition-colors">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] flex text-white font-sans overflow-hidden">
      
      {/* Sidebar Desktop */}
      <motion.aside 
        initial={false}
        animate={{ width: sidebarOpen ? 260 : 80 }}
        className="hidden md:flex flex-col bg-background-950/80 backdrop-blur-2xl border-r border-white/5 h-screen relative z-30 transition-all duration-300"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/5">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <div className="w-8 h-8 min-w-[2rem] rounded bg-gradient-to-tr from-primary-600 to-accent-500 flex items-center justify-center">
              <span className="font-display font-bold text-white text-sm">N</span>
            </div>
            {sidebarOpen && <span className="font-display font-bold tracking-tighter text-lg">NEXUS'26</span>}
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-white/10 rounded-md">
            <Menu className="w-5 h-5 text-text-mid" />
          </button>
        </div>

        <nav className="flex-1 py-6 px-3 flex flex-col gap-2">
          {sidebarItems.map((item, i) => (
            <button 
              key={i} 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                item.active 
                ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20 shadow-[inset_0_0_20px_rgba(124,58,237,0.1)]' 
                : 'text-text-mid hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <item.icon className={`w-5 h-5 min-w-[1.25rem] ${item.active ? 'text-primary-400' : ''}`} />
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.span 
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-medium text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-white/5 flex items-center gap-3">
          {user.photoURL ? (
            <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full border border-white/10" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-white font-bold">{user.email?.[0].toUpperCase()}</span>
            </div>
          )}
          {sidebarOpen && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.displayName || 'User'}</span>
              <span className="text-xs text-text-low">Student Pass</span>
            </div>
          )}
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-[#030712]">
        {/* Background Visuals for Dashboard */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
           <AmusementPark3D />
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] mix-blend-screen" />
           <div className="absolute bottom-[-200px] left-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px] mix-blend-screen" />
        </div>
        
        {/* Top Navbar */}
        <header className="h-16 border-b border-white/5 bg-background-950/40 backdrop-blur-2xl flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-medium text-text-mid">Overview</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Command Palette trigger styling */}
            <button className="hidden sm:flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 w-64 text-sm text-text-low hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>Search anything...</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">⌘</kbd>
                <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs">K</kbd>
              </div>
            </button>

            <button className="relative p-2 text-text-mid hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-500 shadow-[0_0_10px_#00F5FF]" />
            </button>
            <Link to="/">
              <button className="relative p-2 text-gray-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 md:p-8 max-w-6xl mx-auto w-full flex-1 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-display font-bold mb-2 text-white">Welcome back, {user.displayName ? user.displayName.split(' ')[0] : 'Builder'}.</h2>
            <p className="text-gray-400">You have 2 upcoming events today. Your next event starts in 45 minutes.</p>
          </motion.div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Registered Events", value: "4", metric: "+1 this week", color: "text-primary-400" },
              { label: "NXP Points", value: "1,250", metric: "Top 15%", color: "text-accent-400" },
              { label: "Ticket Status", value: hasPass ? "Confirmed" : "Pending Action", metric: hasPass ? "QR Ready" : "Generate Pass", color: hasPass ? "text-emerald-400" : "text-amber-400" }
            ].map((kpi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-all backdrop-blur-md"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-white/10 transition-all" />
                <span className="text-gray-400 text-sm font-medium block mb-2">{kpi.label}</span>
                <span className="text-3xl font-display font-bold block mb-1 text-white">{kpi.value}</span>
                <span className={`text-xs font-semibold uppercase tracking-wider ${kpi.color}`}>
                  {kpi.metric}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Area: Itinerary / Schedule */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-display font-semibold text-white">Your Itinerary</h3>
                <button className="text-sm text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1">
                  Full Schedule <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-md">
                {[
                  { time: "09:00 AM", title: "Opening Keynote", loc: "Main Auditorium", done: true },
                  { time: "11:30 AM", title: "Hackathon Kickoff", loc: "Hacker Arena", active: true },
                  { time: "02:00 PM", title: "VC Mixer (Invite Only)", loc: "Lounge B", done: false },
                ].map((ev, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${ev.active ? 'bg-primary-900/40 border border-primary-500/30' : 'hover:bg-white/5 border border-transparent'}`}>
                    <div className="flex flex-col items-center gap-2 mt-1">
                      {ev.done ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : ev.active ? <Circle className="w-5 h-5 text-[#00F5FF] fill-[#00F5FF]/20" /> : <Circle className="w-5 h-5 text-white/20" />}
                      {i !== 2 && <div className="w-[2px] h-10 bg-white/10" />}
                    </div>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${ev.active ? 'text-[#00F5FF]' : 'text-gray-500'}`}>{ev.time}</span>
                      <h4 className={`text-base font-semibold mb-1 ${ev.active ? 'text-white' : 'text-gray-300'}`}>{ev.title}</h4>
                      <span className="text-sm text-gray-400 flex items-center gap-2">
                        {ev.loc} {ev.active && <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-[#00F5FF]/20 text-[#00F5FF] border border-[#00F5FF]/30 backdrop-blur-sm">Happening Now</span>}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sidebar Widgets (Passes) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-transparent relative overflow-visible flex justify-center mt-4">
                {hasPass ? (
                  <StudentPass3D />
                ) : (
                  <StudentPassGenerator />
                )}
              </div>

            </motion.div>
          </div>
        </div>
      </main>

    </div>
  );
}
