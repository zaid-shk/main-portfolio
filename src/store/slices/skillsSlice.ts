import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Skill {
  name: string;
  iconName: string;
  category: string;
  color: 'emerald' | 'cyan' | 'blue' | 'amber' | 'indigo';
}

interface SkillsState {
  items: Skill[];
}

const initialState: SkillsState = {
  items: [
    { name: "TypeScript", iconName: "TypeScript", category: "LOGIC", color: "emerald" },
    { name: "JavaScript", iconName: "JavaScript", category: "LOGIC", color: "emerald" },
    { name: "Python", iconName: "Python", category: "LOGIC", color: "emerald" },
    { name: "React", iconName: "React", category: "FRONTEND", color: "blue" },
    { name: "Redux", iconName: "Redux", category: "STATE", color: "blue" },
    { name: "Tailwind", iconName: "Tailwind", category: "UI", color: "cyan" },
    { name: "Node.js", iconName: "Node", category: "RUNTIME", color: "cyan" },
    { name: "Express", iconName: "Express", category: "BACKEND", color: "cyan" },
    { name: "Bun", iconName: "Bun", category: "RUNTIME", color: "amber" },
    { name: "MongoDB", iconName: "Mongo", category: "NOSQL", color: "emerald" },
    { name: "MySQL", iconName: "Database", category: "SQL", color: "blue" },
    { name: "GSAP", iconName: "GSAP", category: "MOTION", color: "amber" },
    { name: "Framer", iconName: "Framer", category: "MOTION", color: "blue" },
    { name: "Figma", iconName: "Figma", category: "DESIGN", color: "emerald" },
    { name: "Pandas", iconName: "Data", category: "DATA", color: "amber" },
    { name: "Matplotlib", iconName: "Data", category: "DATA", color: "cyan" },
  ],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<Skill>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
