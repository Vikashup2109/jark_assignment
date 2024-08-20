import Link from "next/link";
import { ChevronDown, MenuIcon, PanelsTopLeft, UserIcon } from "lucide-react";

import { Button } from "../ui/button";
import Menu from "../Menu/page";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "../ui/sheet";
import { cn } from "../../lib/utils";
import { useStore } from "../../hooks/useStore";

const LeftDrawer = () => {
  const isSideBarOpen = useStore((state) => state.isSideBarOpen);
  // const setIsSideBarOpen = useStore((state) => state.setIsSideBarOpen);
  return (
    <Sheet className="">
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="sm:w-72 px-3 h-full flex flex-col overflow-y-auto shadow-md dark:shadow-zinc-800 !bg-[#8c7443]"
        side="left"
      >
        <SheetHeader>
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
        </SheetHeader>

        {/* <Menu isOpen={isSideBarOpen} /> */}
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
};

export default LeftDrawer;
