"use client";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import LeftDrawer from "../LeftDrawer/page";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 sm:mx-8 flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <LeftDrawer />
          <Image src={Logo} alt="Company Logo" width={120} height={70} />
        </div>
        <div className="relative">
          <Bell color="#9ca3af" size={20} />
          <span className="absolute -top-3 -right-1 text-[#e7e7e7] text-[12px] bg-[#cd4b5b] rounded-full leading-none py-0.5 px-1">
            4
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
