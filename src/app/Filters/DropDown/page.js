"use client";

import * as React from "react";

import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const DropdownMenuComp = ({
  filterValues,
  filterIcon,
  selectedValue,
  onValueChange,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="w-full lg:w-1/2 h-[50px] border-2 rounded-xl"
      >
        <Button variant="outline" className="!py-2">
          <div className="w-full flex gap-3 !items-center !justify-between ">
            <div className="flex items-center gap-3">
              <div className="rounded-full border bg-[#6b7280] w-8 h-8 flex items-center justify-center text-white">
                {filterIcon}
              </div>
              <span className="font-normal text-[15px]">{selectedValue}</span>
            </div>
            <ChevronDown />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="!w-[200px]">
        <DropdownMenuRadioGroup
          value={selectedValue}
          onValueChange={onValueChange}
        >
          {filterValues?.map((value) => (
            <DropdownMenuRadioItem key={value} value={value}>
              {value}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { DropdownMenuComp };
