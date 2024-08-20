import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      isSideBarOpen: true,
      setIsSideBarOpen: () => {
        set({ isSideBarOpen: !get().isSideBarOpen });
      },
    }),
    {
      name: "store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
