  import { create } from "zustand";

  // Theme store to manage and persist theme selection
export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("CallVerse-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("CallVerse-theme", theme);
    set({ theme });
  },
}));