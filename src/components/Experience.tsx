import { motion } from "framer-motion";
import { GsapReveal } from "./GsapReveal";

const experiences = [
  {
    year: "2026",
    role: "Data Science Associate",
    company: "Techno Growth",
    description: "Developed robust data analysis workflows, built predictive machine learning models, and processed complex datasets to extract actionable insights and trends.",
    tags: ["Machine Learning", "Data Analytics", "Python", "SQL Databases", "Predictive Modeling"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden bg-white/[0.003] border-y border-white/5">
      {/* High-tech matrix dot grid mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <GsapReveal>
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-4 block">Chronology</span>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">EXPERIENCE</h2>
            </div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-wider max-w-xs md:text-right">
              Professional journey engineered with rigorous analytical execution.
            </p>
          </div>
        </GsapReveal>

        <div className="relative pl-8 md:pl-16 border-l border-white/5 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative flex flex-col md:flex-row md:items-start justify-between p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.02] transition-all duration-500 cursor-default"
            >
              {/* Pulsating Emerald Anchor Node */}
              <div className="absolute -left-[41px] md:-left-[73px] top-10 flex items-center justify-center">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/50 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-4 border-black"></span>
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 w-full md:w-3/5">
                <span className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-emerald-400 transition-colors duration-500 font-mono tracking-tighter">
                  {exp.year}
                </span>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-emerald-400 font-black text-xs uppercase tracking-widest mb-6">
                    {exp.company}
                  </p>
                  
                  {/* Glassmorphic Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/5 text-[9px] font-black uppercase tracking-wider text-white/50 group-hover:text-white/80 group-hover:bg-white/[0.04] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 md:mt-0 w-full md:w-2/5 md:pl-8 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0">
                <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/70 transition-colors duration-500 tracking-wider">
                  {exp.description}
                </p>
              </div>

              {/* Animated Glow Line on Card bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-700 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
