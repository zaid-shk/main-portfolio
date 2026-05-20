import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Terminal, X, Code } from "lucide-react";
import { GsapReveal } from "./GsapReveal";
import { GithubIcon } from "./SocialIcons";
import { cn } from "@/lib/utils";

// Dynamic micro-visualizations representing actual project showcases
const VisualShowcase = ({ category, isHovered }: { category: string; isHovered: boolean }) => {
  if (category === "DATA ANALYSIS") {
    return (
      <div className="absolute right-6 top-6 w-36 h-24 rounded-2xl border border-white/5 bg-white/[0.01] p-3 overflow-hidden font-mono text-[7px] text-emerald-400/50 flex flex-col gap-1 transition-all duration-500 group-hover:border-emerald-500/20 group-hover:bg-emerald-500/[0.02] select-none pointer-events-none">
        <div className="flex justify-between border-b border-white/5 pb-1">
          <span className="text-[6px] text-white/30 font-black">SCRAPER_RUN</span>
          <span className="text-[6px] text-emerald-500 animate-pulse font-black">ACTIVE</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-white/20">&gt;</span>
          <span className="truncate">fetching url data...</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-white/20">&gt;</span>
          <span className="text-cyan-400">JSON response [200 OK]</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="text-white/20">&gt;</span>
          <span className="text-emerald-400 font-bold">inserted 1,024 records</span>
        </div>
      </div>
    );
  }

  if (category === "VISUALIZATION" || category === "SYSTEM DESIGN") {
    return (
      <div className="absolute right-6 top-6 w-36 h-24 rounded-2xl border border-white/5 bg-white/[0.01] p-3 overflow-hidden flex flex-col justify-end gap-1.5 transition-all duration-500 group-hover:border-emerald-500/20 group-hover:bg-emerald-500/[0.02] select-none pointer-events-none">
        <div className="absolute top-2 left-3 text-[6px] font-mono text-white/30 font-black">REALTIME CHART HUD</div>
        <div className="flex items-end gap-1.5 h-12 px-1">
          {[40, 70, 55, 90, 35, 60, 85, 45].map((height, idx) => (
            <motion.div
              key={idx}
              initial={{ height: "20%" }}
              animate={isHovered ? { height: `${height}%` } : { height: `${20 + (idx % 3) * 20}%` }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 9,
                delay: idx * 0.03,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse"
              }}
              className="flex-1 rounded-t-[2px] bg-gradient-to-t from-emerald-500/10 to-emerald-400/80"
            />
          ))}
        </div>
      </div>
    );
  }

  // INTERACTIVE EXPERIENCE (e.g. TATTO DIGITAL)
  return (
    <div className="absolute right-6 top-6 w-36 h-24 rounded-2xl border border-white/5 bg-white/[0.01] p-3 overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:border-emerald-500/20 group-hover:bg-emerald-500/[0.02] select-none pointer-events-none">
      <div className="relative w-12 h-12 border border-dashed border-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-t-emerald-400/50 border-r-transparent border-b-transparent border-l-transparent rounded-full"
        />
        <Terminal size={14} className="text-emerald-400/40 group-hover:text-emerald-400 transition-colors" />
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }: { project: any; i: number; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative h-[450px] rounded-[2rem] bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col justify-between p-6 sm:p-10 hover:border-emerald-500/30 transition-all duration-500 cursor-pointer"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      {/* Animated Glow */}
      <div className={cn(
        "absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000",
        project.color
      )} />

      {/* Interactive Micro-Visualization Showcase (Visible only on screens where there is space) */}
      <div className="hidden sm:block">
        <VisualShowcase category={project.category} isHovered={isHovered} />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
           <div className="flex flex-col">
             <span className="text-[9px] font-black tracking-[0.3em] text-emerald-500 mb-2 uppercase">{project.category}</span>
             <span className="text-[8px] font-bold text-white/20 font-mono tracking-widest">{project.id}</span>
           </div>
        </div>
        
        <h3 className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500 max-w-[200px] sm:max-w-[240px]">
           {project.title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed max-w-[280px]">
           {project.description}
        </p>
      </div>

      <div className="relative z-10">
        {/* Real-time Metrics UI */}
        <div className="grid grid-cols-3 gap-4 mb-8 pt-8 border-t border-white/5">
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">{key}</span>
                <span className="text-[10px] sm:text-[11px] font-black text-white/80 uppercase">{value as string}</span>
              </div>
            ))}
        </div>

        <div className="flex items-center justify-between">
           <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-emerald-400 transition-colors">
              Deploy Stats <ArrowUpRight size={14} />
           </span>
           <div className="flex gap-4">
             {project.githubUrl && (
               <div className="text-white/20 group-hover:text-white/55 transition-colors">
                 <GithubIcon className="w-5 h-5" />
               </div>
             )}
           </div>
        </div>
      </div>

      {/* Hover Scanning Laser Line */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-emerald-500/20 blur-sm z-20 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = useSelector((state: RootState) => state.projects.items);
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "datascience">("all");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const tabs = [
    { id: "all", label: "All Repos" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "datascience", label: "Data & Analysis" },
  ] as const;

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "frontend") {
      return ["INTERACTIVE EXPERIENCE", "SYSTEM DESIGN", "INTERACTIVE WEB", "DIGITAL EXPERIENCE"].includes(project.category);
    }
    if (activeTab === "datascience") {
      return ["VISUALIZATION", "DATA ANALYSIS"].includes(project.category);
    }
    return true;
  });

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <GsapReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-4 block">Central Repository</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">PROJECT SHOWCASE</h2>
            </div>
            <p className="text-white/30 text-xs max-w-xs md:text-right uppercase tracking-wider font-bold">
              A curated selection of high-impact systems developed for the autonomous web.
            </p>
          </div>
        </GsapReveal>

        {/* Dynamic Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-300",
                activeTab === tab.id ? "text-black" : "text-white/40 hover:text-white"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeProjectTab"
                  className="absolute inset-0 bg-emerald-400 rounded-full -z-10 shadow-[0_0_20px_rgba(52,211,153,0.35)]"
                  transition={{ type: "spring", stiffness: 350, damping: 26 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Shifting Grid Showcase */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                i={i} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Cinematic Details Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-[#090909] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 relative overflow-y-auto max-h-[90vh] cursor-default"
              >
                {/* Radial Glow Ambient */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all z-10"
                >
                  <X size={14} />
                </button>

                {/* Header Info */}
                <div className="mb-6 sm:mb-8 pt-4 sm:pt-0">
                  <span className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] text-emerald-500 mb-2 block uppercase">
                    {selectedProject.category} • {selectedProject.id}
                  </span>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 border-b border-white/5 pb-6 sm:pb-8">
                  {selectedProject.description}
                </p>

                {/* Simulated Performance HUD Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                    <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1.5">Lighthouse</p>
                    <span className="text-xs sm:text-sm md:text-base font-black text-emerald-400">98% Perf</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                    <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1.5">Security</p>
                    <span className="text-xs sm:text-sm md:text-base font-black text-cyan-400">Verified</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                    <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1.5">Codebase</p>
                    <span className="text-xs sm:text-sm md:text-base font-black text-emerald-400">Clean SPA</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                    <p className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1.5">SEO Index</p>
                    <span className="text-xs sm:text-sm md:text-base font-black text-cyan-400">100/100</span>
                  </div>
                </div>

                {/* Tech Specs Breakdown */}
                <div className="mb-8 sm:mb-10">
                  <h4 className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] text-white/30 uppercase mb-4 flex items-center gap-2">
                    <Code size={12} className="text-emerald-500" /> SYSTEM ARCHITECTURE SPECIFICATIONS
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center text-xs py-2 border-b border-white/5">
                      <span className="text-white/40 uppercase tracking-wider font-bold">Primary Target</span>
                      <span className="text-white font-mono font-bold">Production SPA Deploy</span>
                    </div>
                    <div className="flex justify-between items-center text-xs py-2 border-b border-white/5">
                      <span className="text-white/40 uppercase tracking-wider font-bold">Optimization</span>
                      <span className="text-white font-mono font-bold">Framer Motion & Tailwind Core</span>
                    </div>
                    <div className="flex justify-between items-center text-xs py-2 border-b border-white/5">
                      <span className="text-white/40 uppercase tracking-wider font-bold">Accessibility Status</span>
                      <span className="text-emerald-400 font-mono font-black">WCAG 2.2 AA COMPLIANT</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Launch buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {selectedProject.liveUrl || selectedProject.link ? (
                    <a
                      href={selectedProject.liveUrl || selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-black font-black text-center text-xs uppercase tracking-widest hover:bg-emerald-400 hover:text-black transition-all flex items-center justify-center gap-2"
                    >
                      Launch Live App <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 text-white/30 font-black text-center text-xs uppercase tracking-widest cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      App Launch Offline <ArrowUpRight size={14} />
                    </button>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10 text-white font-black text-center text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" /> Repository
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium Bottom Footer callout */}
        <div className="mt-24 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-white/[0.01] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-emerald-500/20 transition-all duration-500">
           <div className="text-center md:text-left">
             <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-tighter">LOOKING FOR MORE?</h3>
             <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Explore the full production archive of delivered projects on GitHub.</p>
           </div>
           <Link 
             to="/archive"
             className="px-10 py-5 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-emerald-400 hover:text-black transition-all shadow-xl hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] duration-300 w-full md:w-auto text-center"
           >
              VIEW ALL WORK
           </Link>
        </div>
      </div>
    </section>
  );
};
