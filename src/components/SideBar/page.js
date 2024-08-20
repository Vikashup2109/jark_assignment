import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { useStore } from "../../hooks/useStore";
import Menu from "../Menu/page";
import { SidebarToggle } from "../SidebarToggle/page";
import { ChevronDown, UserIcon } from "lucide-react";

const Sidebar = () => {
  const isSideBarOpen = useStore((state) => state.isSideBarOpen);
  const setIsSideBarOpen = useStore((state) => state.setIsSideBarOpen);

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-[#8c7443]",
        isSideBarOpen === false ? "w-[110px]" : "w-60"
      )}
    >
      <SidebarToggle isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
      <div className="relative h-full flex flex-col px-2 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(" bg-[#7e683c] w-fit mx-auto h-fit")}
          variant="link"
          asChild
        >
          <div
            className={`flex ${
              isSideBarOpen === false ? "flex-col" : "flex-row"
            }`}
          >
            <UserIcon className="w-[28px] h-[28px] p-1 bg-white  rounded-full" />
            <span className="p-2 text-secondary">Zaib</span>

            <div className="ml-10">
              <ChevronDown
                color="white"
                className={`${isSideBarOpen === false ? "hidden" : ""}`}
              />
            </div>
          </div>
        </Button>
        <Menu isOpen={isSideBarOpen} />
      </div>
    </aside>
  );
};
export default Sidebar;
