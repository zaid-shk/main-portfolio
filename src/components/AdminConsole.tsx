import { useDispatch } from "react-redux";
import { addProject } from "@/store/slices/projectsSlice";
import { Plus, Terminal, Database } from "lucide-react";

export const AdminConsole = () => {
  const dispatch = useDispatch();

  const handleAddProject = () => {
    const newProject = {
      title: "NEW SYSTEM " + Math.floor(Math.random() * 1000),
      id: "0X-" + Math.floor(Math.random() * 1000),
      category: "RUNTIME",
      description: "Dynamically injected via Redux store. Ready for deployment.",
      metrics: { efficiency: "100%", latency: "1ms", load: "Idle" },
      color: "from-amber-500 to-orange-900",
    };
    dispatch(addProject(newProject));
    alert("Project injected into Redux Store!");
  };

  return (
    <section className="py-20 px-6 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
             <Terminal size={16} className="text-emerald-500" />
          </div>
          <h2 className="text-sm font-black tracking-[0.4em] text-white/40 uppercase">System Console / Admin</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div 
             onClick={handleAddProject}
             className="group p-8 rounded-[2rem] glass-dark border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer flex items-center justify-between"
           >
              <div>
                <h3 className="text-xl font-black text-white mb-2">INJECT PROJECT</h3>
                <p className="text-xs text-white/30 font-mono">DISPATCH: projects/addProject</p>
              </div>
              <Plus className="text-emerald-500 group-hover:scale-125 transition-transform" />
           </div>

           <div className="p-8 rounded-[2rem] glass-dark border border-white/5 opacity-50 flex items-center justify-between grayscale">
              <div>
                <h3 className="text-xl font-black text-white mb-2">INJECT SKILL</h3>
                <p className="text-xs text-white/30 font-mono">DISPATCH: skills/addSkill (Locked)</p>
              </div>
              <Database className="text-white/20" />
           </div>
        </div>
      </div>
    </section>
  );
};
