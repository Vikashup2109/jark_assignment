"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { ScrollArea } from "../../components/ui/scroll-area";
import UserIcon from "../Usericon/page";
import { getMenuList } from "../../lib/menuList";

const Menu = ({ isOpen }) => {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, index) => {
            return (
              <li className={cn("w-full", groupLabel ? "" : "")} key={index}>
                <p className="text-[14px] font-medium text-[#fff] px-2 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>

                {menus.map(({ href, label, active }, index) => {
                  return (
                    <div className="w-full" key={index}>
                      <Button
                        variant={active ? "secondary" : "ghost"}
                        className={`w-full justify-start h-10 mb-1 hover:bg-[#7e683c] text-secondary hover:text-secondary ${
                          active ? "bg-[#7e683c] " : ""
                        }`}
                        asChild
                      >
                        <Link href={href}>
                          <span className={cn(isOpen === false ? "" : "mr-4")}>
                            <UserIcon size={18} />
                          </span>
                          <p
                            className={cn(
                              "max-w-[200px] truncate  text-[12px]",
                              isOpen === false
                                ? "-translate-x-96 opacity-0"
                                : "translate-x-0 opacity-100"
                            )}
                          >
                            {label}
                          </p>
                        </Link>
                      </Button>
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </nav>
    </ScrollArea>
  );
};

export default Menu;
