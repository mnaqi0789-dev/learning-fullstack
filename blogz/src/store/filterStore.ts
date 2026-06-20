import { create } from 'zustand';

interface FilterState {
  activeCategory: 'all' | 'finance' | 'compsci';
  setCategory: (category: 'all' | 'finance' | 'compsci') => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  activeCategory: 'all', 
  setCategory: (category) => set({ activeCategory: category }), 
}));