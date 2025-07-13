// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice'; // We'll create this next

export const store = configureStore({
  reducer: {
    ui: uiReducer, // Our UI state slice
  },
});