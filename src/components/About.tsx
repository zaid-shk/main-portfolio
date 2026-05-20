import { motion } from "framer-motion";
import { GsapReveal } from "./GsapReveal";
import { Cpu, Globe, Rocket, Sparkles, Zap, Database } from "lucide-react";

export const About = () => {
  const techStack = [
    // Frontend
    { name: "React.js", glow: "hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/30" },
    { name: "Next.js", glow: "hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-white/20" },
    { name: "TypeScript", glow: "hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-500/30" },
    { name: "JavaScript", glow: "hover:text-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:border-yellow-500/30" },
    { name: "Tailwind CSS", glow: "hover:text-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:border-sky-500/30" },
    { name: "GSAP Motion", glow: "hover:text-lime-400 hover:shadow-[0_0_20px_rgba(132,204,22,0.15)] hover:border-lime-500/30" },
    { name: "Framer Motion", glow: "hover:text-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:border-pink-500/30" },
    { name: "HTML5 & CSS3", glow: "hover:text-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-500/30" },
    
    // Data Science
    { name: "Python", glow: "hover:text-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:border-yellow-500/30" },
    { name: "SQL Database", glow: "hover:text-sky-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:border-sky-500/30" },
    { name: "Pandas & NumPy", glow: "hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] hover:border-indigo-500/30" },
    { name: "Scikit-Learn", glow: "hover:text-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-500/30" },
    { name: "Data Analytics", glow: "hover:text-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-500/30" },
    { name: "Matplotlib & Seaborn", glow: "hover:text-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:border-pink-500/30" }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <GsapReveal>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase leading-none text-white">
              FUSING FRONTEND & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">DATA SCIENCE</span>
            </h2>
          </GsapReveal>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base font-medium mt-3">
            Crafting high-performance user interfaces illuminated by mathematical data logic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Story Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-500"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-emerald-500/15 transition-all duration-700" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">The Vision</h3>
            </div>
            <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-semibold">Mohammad Zaid</span>, a dedicated Frontend Developer passionate about designing ultra-modern, highly interactive, and visually stunning web interfaces. I focus on converting advanced conceptual ideas into flawless user journeys that feel lightning fast and intuitive.
              </p>
              <p>
                My domain focuses on front-end aesthetics—crafting creative UI systems, fluid animations, and highly responsive user layouts. I also study modern AI architectures to seamlessly integrate intelligent algorithms directly into my frontend models.
              </p>
              <p>
                Additionally, I bring structured experience in <span className="text-emerald-400 font-semibold">Data Science</span> from my tenure at <span className="text-white font-semibold">Techno Growth</span>, where I built predictive models, processed large datasets, and constructed high-impact analytical algorithms.
              </p>
            </div>
          </motion.div>

          {/* Right Column containing Expertise & Stats */}
          <div className="flex flex-col gap-6">
            {/* Core Expertise Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-500 flex-1"
            >
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] -z-10 group-hover:bg-cyan-500/15 transition-all duration-700" />
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit mb-6 border border-cyan-500/10">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-6 text-white">Core Pillars</h3>
              <ul className="space-y-4">
                {[
                  { icon: <Zap className="w-4 h-4" />, title: "Immersive UI", desc: "Interactive GSAP motion & Tailwind CSS" },
                  { icon: <Sparkles className="w-4 h-4" />, title: "Data Visualization", desc: "Interactive charts & dynamic dashboards" },
                  { icon: <Database className="w-4 h-4" />, title: "Data Science", desc: "Tenured statistical model formulation" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-white/50">
                    <span className="text-emerald-400 mt-1">{item.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">{item.title}</p>
                      <p className="text-xs text-white/45 mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats Sub-Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group hover:border-white/10 transition-all duration-300"
              >
                <h4 className="text-4xl font-black text-white group-hover:text-emerald-400 transition-colors">1m</h4>
                <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mt-2">Data Science Exp</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group hover:border-white/10 transition-all duration-300"
              >
                <h4 className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">2+</h4>
                <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.2em] mt-2">Projects Completed</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Global Availability Footer Pill */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 p-5 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 px-8"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                Currently Available for Remote Positions Globally
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> Remote / Worldwide
            </div>
          </motion.div>
        </div>

        {/* Custom Glowing Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4 text-center">Tech stack & toolkit</p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/5 text-white/50 font-semibold text-xs transition-all duration-300 ${tech.glow} cursor-default select-none`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
