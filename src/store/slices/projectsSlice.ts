import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Project {
  title: string;
  id: string;
  category: string;
  description: string;
  metrics: {
    animation?: string;
    design?: string;
    performance?: string;
    efficiency?: string;
    latency?: string;
    load?: string;
    experience?: string;
  };
  color: string;
  githubUrl?: string;
  liveUrl?: string;
  link?: string;
}

interface ProjectsState {
  items: Project[];
}

const initialState: ProjectsState = {
  items: [
    {
      title: "TATTO DIGITAL",
      id: "0X-001",
      category: "INTERACTIVE EXPERIENCE",
      description:
        "Futuristic tattoo-inspired digital platform crafted with cinematic animations, immersive visuals, and modern web interactions.",
      metrics: { animation: "Smooth", design: "Modern", performance: "Optimized" },
      color: "from-neutral-800 to-black",
      liveUrl: "https://tatto-digital.vercel.app/",
      githubUrl: "https://github.com/zaid-shk/tatto-digital",
    },
    {
      title: "DEV VIEW",
      id: "0X-002",
      category: "INTERACTIVE WEB",
      description:
        "A futuristic web experience crafted with immersive visuals, fluid animations, and modern frontend interactions for developers and creators.",
      metrics: { animation: "Fluid", design: "Premium", performance: "Fast" },
      color: "from-cyan-500 to-blue-950",
      link: "https://dev-view-lemon.vercel.app/",
      githubUrl: "https://github.com/zaid-shk/DevView",
    },
    {
      title: "FREELANCE DEMO",
      id: "0X-003",
      category: "DIGITAL EXPERIENCE",
      description:
        "Immersive freelance showcase experience featuring bold typography, fluid animations, and modern web interactions crafted for creative professionals.",
      metrics: { animation: "Fluid", experience: "Interactive", performance: "Optimized" },
      color: "from-amber-500 to-black",
      link: "https://freelance-demo-three.vercel.app/",
      githubUrl: "https://github.com/zaid-shk/freelen-main/tree/main/Front",
    },
    {
      title: "INTELLIGENT SCRAPER",
      id: "0X-004",
      category: "DATA ANALYSIS",
      description: "Advanced web extraction tool using machine learning to structure raw data from complex, dynamic websites.",
      metrics: { efficiency: "91%", latency: "200ms", load: "Active" },
      color: "from-emerald-500 to-slate-900",
      liveUrl: "https://github.com/zaid-shk/intelligent-scraper",
      githubUrl: "https://github.com/zaid-shk/intelligent-scraper",
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.items.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
