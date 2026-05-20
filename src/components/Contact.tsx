import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, ArrowRight, CheckCircle2, Loader2, Wifi, User, Mail, MessageSquare, ShieldAlert, Cpu } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [logIndex, setLogIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const transmissionLogs = [
    "Establishing secure handshake...",
    "Encrypting message packets...",
    "Transmitting data node...",
    "Message delivered successfully!"
  ];

  const handleTransmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("sending");
    setLogIndex(0);
    setErrorMessage("");

    let apiSuccess = false;
    let apiError = "";

    // Trigger Node.js Serverless Nodemailer Endpoint in background
    const apiPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (res.ok) {
          apiSuccess = true;
        } else {
          const data = await res.json().catch(() => ({}));
          apiError = data.error || "Uplink transmission failure";
        }
      })
      .catch((err) => {
        apiError = err.message || "Network handshake disconnected";
      });

    // Run cinematic terminal logs in parallel
    const interval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev >= transmissionLogs.length - 1) {
          clearInterval(interval);
          
          // Wait for API promise to complete before changing form state
          apiPromise.finally(() => {
            if (apiSuccess) {
              setStatus("success");
            } else {
              setStatus("idle");
              setErrorMessage(apiError || "Signal transmission failed.");
            }
          });
          
          return prev;
        }
        return prev + 1;
      });
    }, 750);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden select-none border-t border-white/5 bg-[#030303]">
      {/* Immersive Emerald/Cyan Background Glow Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column containing Headings & HUD Parameters */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <Terminal size={12} className="text-emerald-400" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-400">Connection Portal</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none uppercase">
              LET'S SCALE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500 drop-shadow-[0_2px_30px_rgba(52,211,153,0.25)]">
                TOGETHER.
              </span>
            </h2>
            <p className="text-white/50 text-xs sm:text-sm max-w-md leading-relaxed mb-12 uppercase tracking-wide font-bold">
              Ready to transform your vision into an autonomous reality? Drop a message and let's start building.
            </p>

            <div className="space-y-8">
              <a 
                href="mailto:mohammadzaid8178@gmail.com" 
                className="group inline-flex items-center gap-4 text-lg sm:text-xl md:text-2xl font-black hover:text-emerald-400 transition-all font-mono tracking-tighter uppercase"
              >
                mohammadzaid8178@gmail.com
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-emerald-400" />
              </a>
              
              <div className="flex gap-6">
                <a 
                  href="https://x.com/zaidshk04" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href="https://github.com/zaid-shk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohammadzaid04/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column containing Form HUD console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-black/60 backdrop-blur-xl border border-white/5 relative overflow-hidden"
          >
            {/* Background interactive grid */}
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '15px 15px' }} />

            {/* Tactical HUD Header */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/5 font-mono text-[9px] text-white/40">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-black text-emerald-400 tracking-[0.2em] uppercase">SECURE UPLINK INBOUND</span>
              </div>
              <div className="flex items-center gap-4 font-black">
                <span className="flex items-center gap-1"><Wifi size={10} className="text-emerald-400 animate-pulse" /> PING: 24MS</span>
                <span>SEC: TLS_1.3</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.form 
                  key="form"
                  onSubmit={handleTransmit} 
                  className="space-y-6 sm:space-y-8"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {errorMessage && (
                    <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-400 font-mono text-[9px] uppercase tracking-[0.2em] flex items-center gap-2">
                      <ShieldAlert size={14} className="animate-pulse" />
                      <span>ALERT: {errorMessage}</span>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Name Input */}
                    <div className="space-y-2 relative group">
                      <label className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40 ml-1 flex items-center gap-1.5">
                        <User size={10} className="text-emerald-500/60" /> Identity
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          placeholder="NAME OR COMPANY"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all font-bold text-xs uppercase placeholder:text-white/10 text-white pl-12"
                        />
                        <User size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-400 transition-colors" />
                        <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-focus-within:via-emerald-500/50 transition-all duration-500" />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2 relative group">
                      <label className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40 ml-1 flex items-center gap-1.5">
                        <Mail size={10} className="text-emerald-500/60" /> Frequency
                      </label>
                      <div className="relative">
                        <input
                          required
                          type="email"
                          placeholder="EMAIL ADDRESS"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all font-bold text-xs uppercase placeholder:text-white/10 text-white pl-12"
                        />
                        <Mail size={14} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-emerald-400 transition-colors" />
                        <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-focus-within:via-emerald-500/50 transition-all duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2 relative group">
                    <label className="text-[9px] font-black uppercase tracking-[0.25em] text-white/40 ml-1 flex items-center gap-1.5">
                      <MessageSquare size={10} className="text-emerald-500/60" /> Signal Message
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        rows={5}
                        placeholder="WHAT ARE WE BUILDING?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-emerald-500 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all font-bold text-xs uppercase placeholder:text-white/10 text-white resize-none pl-12"
                      />
                      <MessageSquare size={14} className="absolute left-5 top-6 text-white/20 group-focus-within:text-emerald-400 transition-colors" />
                      <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-focus-within:via-emerald-500/50 transition-all duration-500" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group w-full py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-emerald-400 hover:text-black transition-all shadow-xl hover:shadow-[0_0_30px_rgba(52,211,153,0.25)] duration-300 pointer-events-auto cursor-pointer"
                  >
                    Transmit Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              )}

              {status === "sending" && (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <Loader2 className="w-10 h-10 text-emerald-400 animate-spin" />
                  <div className="space-y-3 w-full max-w-[280px]">
                    <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">UP-LINK TRANSMITTING</h3>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: "10%" }}
                        animate={{ width: `${(logIndex + 1) * 25}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-emerald-400"
                      />
                    </div>
                    <p className="text-[10px] font-mono text-emerald-400/80 h-6 pt-1">
                      [{((logIndex + 1) * 25)}%] {transmissionLogs[logIndex]}
                    </p>
                  </div>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">TRANSMISSION OK</h3>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">
                      Connection secure. Zaid will align shortly.
                    </p>
                  </div>

                  {/* IMMERSIVE TERMINAL RECEIPT LOG CARD */}
                  <div className="w-full max-w-sm rounded-2xl border border-white/5 bg-white/[0.01] p-4 text-left font-mono text-[9px] text-white/40 space-y-1.5">
                    <div className="flex justify-between border-b border-white/5 pb-1 mb-2 text-white/20">
                      <span>METRIC PARAMETERS</span>
                      <span>SECURE_SHELL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-emerald-400 font-bold">200_OK_DELIVERED</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ENCRYPTION:</span>
                      <span className="text-emerald-400">AES_256_GCM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PROTOCOL:</span>
                      <span className="text-cyan-400">TLS_1.3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>DESTINATION:</span>
                      <span className="text-white/60">ZAID_SECURE_INBOX</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="px-6 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-widest pointer-events-auto cursor-pointer"
                  >
                    Send Another Signal
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
