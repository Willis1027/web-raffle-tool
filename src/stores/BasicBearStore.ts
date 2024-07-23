import { create } from "zustand";

export interface BearState {
  bears: number;
  increaseBears: () => void;
  decreaseBears: () => void;
  resetBears: () => void;
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
  decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
  resetBears: () => {
    set({ bears: 600 });
  },
}));
