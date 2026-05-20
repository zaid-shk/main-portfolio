import { ArrowUp, Cpu, Globe } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 border-t border-white/5 relative bg-black/40 overflow-hidden select-none">
      {/* Background soft ambient blur */}
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Premium Brand Logo Mark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-black text-xs text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            MZ
          </div>
          <div className="text-sm font-black tracking-widest uppercase text-white">
            Mohammad <span className="text-emerald-400">Zaid</span>
          </div>
        </div>
        
        {/* Professional Copyright */}
        <p className="text-white/30 text-xs font-bold uppercase tracking-wider text-center md:text-left">
          © {new Date().getFullYear()} Mohammad Zaid. Built with passion & engineering.
        </p>
        
        {/* Dynamic Action Trigger and Sub-Links */}
        <div className="flex items-center gap-6">
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-white/30">
            <span className="hover:text-white transition-colors cursor-default">Privacy</span>
            <span className="hover:text-white transition-colors cursor-default">Terms</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center group pointer-events-auto"
            title="Scroll to top"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Bottom Tactical Heartbeat Status bar */}
      <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto text-white/20 font-mono text-[9px] uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-400/80 font-black">CORE INJECTOR: ON-LINE</span>
        </div>
        <div className="flex items-center gap-4 font-black">
          <span className="flex items-center gap-1"><Cpu size={10} className="text-white/20" /> FRAMEWORK: VITE_REACT</span>
          <span className="flex items-center gap-1"><Globe size={10} className="text-white/20" /> STACK: TAILWIND_V4</span>
        </div>
      </div>
    </footer>
  );
};
