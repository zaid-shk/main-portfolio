import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
import { GsapReveal } from "./GsapReveal";
import { Command } from "lucide-react";
import { FigmaIcon } from "./SocialIcons";
import { 
  TypeScriptIcon, 
  JavaScriptIcon, 
  PythonIcon, 
  ReactIcon, 
  NodeIcon, 
  DatabaseIcon, 
  TailwindIcon, 
  ReduxIcon, 
  ExpressIcon, 
  MongoIcon, 
  GSAPIcon, 
  FramerIcon, 
  DataIcon, 
  BunIcon 
} from "./TechIcons";
import { cn } from "@/lib/utils";

// Icon mapping to handle serializable Redux state
const iconMap: Record<string, React.ReactNode> = {
  TypeScript: <TypeScriptIcon className="w-6 h-6" />,
  JavaScript: <JavaScriptIcon className="w-6 h-6" />,
  Python: <PythonIcon className="w-6 h-6" />,
  React: <ReactIcon className="w-6 h-6" />,
  Redux: <ReduxIcon className="w-6 h-6" />,
  Tailwind: <TailwindIcon className="w-6 h-6" />,
  Node: <NodeIcon className="w-6 h-6" />,
  Express: <ExpressIcon className="w-6 h-6" />,
  Bun: <BunIcon className="w-6 h-6" />,
  Mongo: <MongoIcon className="w-6 h-6" />,
  Database: <DatabaseIcon className="w-6 h-6" />,
  GSAP: <GSAPIcon className="w-6 h-6" />,
  Framer: <FramerIcon className="w-6 h-6" />,
  Figma: <FigmaIcon className="w-6 h-6" />,
  Data: <DataIcon className="w-6 h-6" />,
};

// Brand color maps for high fidelity micro-glows
const colorClasses: Record<string, { text: string; border: string; bg: string; glow: string }> = {
  emerald: { 
    text: "text-emerald-400 group-hover:text-emerald-300", 
    border: "group-hover:border-emerald-500/20", 
    bg: "bg-emerald-500/5", 
    glow: "bg-emerald-500/10 group-hover:bg-emerald-500/20" 
  },
  cyan: { 
    text: "text-cyan-400 group-hover:text-cyan-300", 
    border: "group-hover:border-cyan-500/20", 
    bg: "bg-cyan-500/5", 
    glow: "bg-cyan-500/10 group-hover:bg-cyan-500/20" 
  },
  blue: { 
    text: "text-blue-400 group-hover:text-blue-300", 
    border: "group-hover:border-blue-500/20", 
    bg: "bg-blue-500/5", 
    glow: "bg-blue-500/10 group-hover:bg-blue-500/20" 
  },
  amber: { 
    text: "text-amber-400 group-hover:text-amber-300", 
    border: "group-hover:border-amber-500/20", 
    bg: "bg-amber-500/5", 
    glow: "bg-amber-500/10 group-hover:bg-amber-500/20" 
  },
  indigo: { 
    text: "text-indigo-400 group-hover:text-indigo-300", 
    border: "group-hover:border-indigo-500/20", 
    bg: "bg-indigo-500/5", 
    glow: "bg-indigo-500/10 group-hover:bg-indigo-500/20" 
  },
};

const SkillTile = ({ skill }: { skill: any; i: number }) => {
  const theme = colorClasses[skill.color] || colorClasses.emerald;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-white/[0.02] border border-white/5 transition-all duration-500 cursor-default select-none overflow-hidden",
        theme.border
      )}
    >
      {/* Dynamic Radial Backlight Glow */}
      <div className={cn("absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl", theme.bg)} />
      
      <div className={cn(
        "mb-4 p-4 rounded-2xl border border-white/10 transition-all duration-500 relative overflow-hidden",
        theme.glow,
        theme.text
      )}>
        {iconMap[skill.iconName] || <Command size={24} />}
      </div>
      
      <span className="text-[11px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
      
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <span className={cn("text-[8px] font-black tracking-widest uppercase", theme.text)}>
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const skills = useSelector((state: RootState) => state.skills.items);
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "datascience" | "core">("all");

  const tabs = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "datascience", label: "Data Science" },
    { id: "core", label: "Backend & Core" },
  ] as const;

  const filteredSkills = skills.filter((skill) => {
    if (activeTab === "all") return true;
    if (activeTab === "frontend") {
      return ["FRONTEND", "UI", "MOTION", "DESIGN", "STATE"].includes(skill.category);
    }
    if (activeTab === "datascience") {
      return ["DATA", "SQL", "NOSQL"].includes(skill.category) || skill.name === "Python";
    }
    if (activeTab === "core") {
      return ["LOGIC", "RUNTIME", "BACKEND"].includes(skill.category) && skill.name !== "Python";
    }
    return true;
  });

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Subtle decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.01] -z-10">
         <h2 className="text-[35vw] font-black tracking-tighter text-white leading-none">CORE</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <GsapReveal>
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-4 block">System Core</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase">TECH STACK</h2>
            </div>
            <div className="hidden md:flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5">
               <Command size={14} className="text-emerald-500 animate-spin" style={{ animationDuration: "8s" }} />
               <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Interactive Skill Matrix</span>
            </div>
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
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-emerald-400 rounded-full -z-10 shadow-[0_0_20px_rgba(52,211,153,0.35)]"
                  transition={{ type: "spring", stiffness: 350, damping: 26 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* AnimatePresence Responsive Skills Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <SkillTile key={skill.name} skill={skill} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Infinite Running Marquee Footer */}
        <div className="mt-24 pt-10 border-t border-white/5 relative overflow-hidden w-full">
           <div className="flex gap-20 animate-infinite-scroll whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity duration-1000 w-max">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-20 items-center flex-shrink-0">
                   {['HTML5', 'CSS3', 'BOOTSTRAP', 'REACT ROUTER', 'NPM', 'GIT', 'VITE', 'NUMPY', 'NODEMON'].map((text) => (
                      <div key={text} className="flex items-center gap-6">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                         <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white">{text}</span>
                      </div>
                   ))}
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
