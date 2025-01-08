import { create } from "zustand";

interface BurgerMenuState {
    isOpen: boolean;
    toggleMenu: () => void;
    resetMenu: () => void; // Added reset function for universal state reset
}

export const useBurgerMenuContext = create<BurgerMenuState>((set) => ({
    isOpen: false,

    // Toggle the menu open/close
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),

    // ✅ Universal state reset function
    resetMenu: () => set({ isOpen: false })
}));
