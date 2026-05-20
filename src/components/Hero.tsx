import { motion } from "framer-motion";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "./SocialIcons";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden select-none">
      {/* Immersive Holographic Dot-Grid Matrix Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 pointer-events-none" />
      
      {/* Background Ambient Multi-Layer Blur Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-600/5 to-cyan-500/5 rounded-full blur-[180px] -z-10" />
      
      <div className="max-w-6xl mx-auto text-center z-10 w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.02)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/70">
            Open for Collaborations • 2026
          </span>
        </motion.div>

        {/* Cinematic Bold Header Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-[8rem] lg:text-[9.5rem] font-black tracking-tighter text-white leading-[0.85] mb-10 select-none uppercase"
        >
          CRAFTING DIGITAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-emerald-500 drop-shadow-[0_2px_45px_rgba(16,185,129,0.2)]">
            EXPERIENCES
          </span>
        </motion.h1>

        {/* Personalized Bio Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12 text-center uppercase tracking-wider font-semibold"
        >
          Frontend Developer specializing in <span className="text-white font-black underline decoration-emerald-400 decoration-2 underline-offset-4">high-performance web interfaces</span>, robust user experiences, and dynamic data visualizations.
        </motion.p>

        {/* Glowing Dynamic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-24"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black hover:bg-emerald-400 hover:text-black hover:scale-[1.03] transition-all shadow-xl hover:shadow-[0_0_30px_rgba(52,211,153,0.25)] text-[10px] uppercase tracking-widest text-center duration-300"
          >
            Start a Project
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-white/5 bg-white/[0.01] text-white font-black hover:bg-white/[0.04] hover:border-white/10 transition-all text-[10px] uppercase tracking-widest text-center duration-300"
          >
            View Projects
          </a>
        </motion.div>

        {/* Premium Bottom Status Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-4xl mx-auto text-left items-center"
        >
          <div className="px-4 md:px-0">
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.25em] mb-1.5">Status</p>
            <p className="text-xs text-white/70 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available for new work
            </p>
          </div>
          <div className="px-4 md:px-0 md:text-center">
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.25em] mb-1.5">Based in</p>
            <p className="text-xs text-white/70 font-bold uppercase tracking-wider">New Delhi, India</p>
          </div>
          <div className="px-4 md:px-0 md:text-right flex flex-col md:items-end">
            <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.25em] mb-2.5">Connect</p>
            <div className="flex gap-2.5">
              <a href="https://github.com/zaid-shk" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white/60">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://x.com/zaidshk04" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white/60">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/mohammadzaid04/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white/60">
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
        <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.45em]">Scroll</span>
      </motion.div>
    </section>
  );
};
