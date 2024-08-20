"use client";

import { cn } from "../../lib/utils";
import Sidebar from "../SideBar/page";
import { useStore } from "../../hooks/useStore";

export default function AdminPanelLayout({ children }) {
  const isSideBarOpen = useStore((state) => state.isSideBarOpen);

  //   if (!sidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          isSideBarOpen === false ? "lg:ml-[110px]" : "lg:ml-60"
        )}
      >
        {children}
      </main>
    </>
  );
}
