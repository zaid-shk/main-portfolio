import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll trigger for navbar height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section Observer to automatically update active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observers = sections.map((sec, idx) => {
      const el = document.getElementById(sec);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(idx);
          }
        },
        { threshold: 0.25, rootMargin: "-20% 0px -55% 0px" }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveIndex(index);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border",
          isScrolled
            ? "w-full max-w-4xl bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl shadow-emerald-950/20"
            : "w-full max-w-5xl bg-white/5 backdrop-blur-md border-white/5"
        )}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-black text-xs text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
          >
            MZ
          </motion.div>
          <span className="text-xs font-black tracking-[0.1em] uppercase text-white group-hover:text-emerald-400 transition-colors hidden sm:block">
            Mohammad Zaid
          </span>
        </Link>

        {/* Desktop Links with Sliding Capsule (Hidden on Medium and smaller devices to prevent squish) */}
        <div className="hidden lg:flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.04] p-1 rounded-full relative">
          {navLinks.map((link, idx) => {
            const isActive = activeIndex === idx;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href, idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-300 select-none z-10",
                  isActive ? "text-white" : "text-white/40 hover:text-white"
                )}
              >
                {/* Sliding active/hover indicator */}
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                {isActive && hoveredIndex !== idx && (
                  <motion.div
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 26 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (location.pathname !== "/") navigate("/#contact");
              else document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden sm:block px-5 py-2.5 rounded-full bg-white hover:bg-emerald-500 text-black hover:text-white text-[9px] font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            Get in Touch
          </motion.button>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-emerald-400 transition-colors pointer-events-auto"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed inset-x-6 top-28 z-50 lg:hidden p-6 rounded-3xl bg-black/85 backdrop-blur-2xl border border-white/10 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href, idx)}
                  className={cn(
                    "text-lg font-bold transition-all px-4 py-2 rounded-2xl",
                    activeIndex === idx 
                      ? "text-emerald-400 bg-emerald-500/10" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10 my-2" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname !== "/") navigate("/#contact");
                  else document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-4 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/25"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
