import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';
import skillsReducer from './slices/skillsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    skills: skillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
