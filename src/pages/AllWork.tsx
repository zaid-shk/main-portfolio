import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import type { Project } from "@/store/slices/projectsSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Terminal, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/SocialIcons";

export const AllWork = () => {
  const projects = useSelector((state: RootState) => state.projects.items);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const categories: string[] = ["ALL", ...Array.from(new Set(projects.map((p: Project) => p.category)))];

  const filteredProjects = projects.filter((p: Project) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "ALL" || p.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-emerald-500 transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Terminal
          </Link>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">PROJECT<br />ARCHIVE</h1>
          <p className="text-white/30 max-w-lg">A complete catalog of systems, experiments, and deployed applications.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search by system name or spec..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-16 pr-6 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                  filter === cat
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Table/Grid View */}
        <div className="grid grid-cols-1 gap-4 mb-32">
          {filteredProjects.map((project: Project, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              key={project.id}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 rounded-3xl glass-dark border border-white/5 hover:border-emerald-500/30 transition-all"
            >
              <div className="flex items-center gap-8 mb-6 md:mb-0">
                <span className="text-[10px] font-mono text-white/20">{project.id}</span>
                <div>
                  <h3 className="text-2xl font-black group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">{project.category}</span>
                </div>
              </div>

              <p className="text-white/40 text-sm max-w-md mb-6 md:mb-0 line-clamp-1 md:line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end mr-8 hidden lg:flex">
                  <span className="text-[8px] font-bold text-white/20 uppercase">Efficiency</span>
                  <span className="text-xs font-black text-emerald-500">{project.metrics.efficiency}</span>
                </div>
                <div className="flex gap-2">
                  <a href={project.githubUrl} className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-black transition-all">
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a href={project.liveUrl} className="p-3 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-black transition-all">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="py-32 text-center">
              <Terminal className="mx-auto mb-4 text-white/10" size={48} />
              <p className="text-white/20 font-mono">No matching systems found in the archive.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
