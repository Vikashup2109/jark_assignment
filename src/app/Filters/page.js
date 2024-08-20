"use client";

import React, { useState } from "react";
import DropDown from "./DropDown/page";
import { CalendarFold, ChevronDown, Group, User } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

const Filters = () => {
  const [filters, setFilters] = useState({
    user: "All",
    team: "All",
    date: "Today",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [filterType]: value,
      };
    });
  };

  const usersFilterValues = ["All", "Vikash", "Akash", "Shubham", "Ankit"];
  const userFilterIcon = <User />;
  const teamsFilterValues = ["All", "Team 1", "Team 2", "Team 3", "Team 4"];
  const teamsFilterIcon = <Group />;
  const dateFilterValues = [
    "All",
    "Today",
    "This Week",
    "Last Week",
    "Last Month",
  ];
  const DateFilterIcon = <CalendarFold />;
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 my-7">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:w-1/2 ">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="w-full lg:w-1/2 h-[50px] border-2 rounded-xl"
          >
            <Button variant="outline" className="!py-2">
              <div className="w-full flex gap-3 !items-center !justify-between ">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border bg-[#6b7280] w-8 h-8 flex items-center justify-center text-white">
                    {userFilterIcon ? userFilterIcon : <></>}
                  </div>
                  <span className="font-normal text-[15px]">
                    {filters?.user}
                  </span>
                </div>
                <ChevronDown />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!w-[200px]">
            <DropdownMenuRadioGroup
              value={filters?.date}
              onValueChange={(value) => handleFilterChange("user", value)}
            >
              {usersFilterValues?.map((value, index) => (
                <DropdownMenuRadioItem key={index} value={value}>
                  {value}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="w-full lg:w-1/2 h-[50px] border-2 rounded-xl"
          >
            <Button variant="outline" className="!py-2">
              <div className="w-full flex gap-3 !items-center !justify-between ">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border bg-[#6b7280] w-8 h-8 flex items-center justify-center text-white">
                    {teamsFilterIcon ? teamsFilterIcon : <></>}
                  </div>
                  <span className="font-normal text-[15px]">
                    {filters.team}
                  </span>
                </div>
                <ChevronDown />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!w-[200px]">
            <DropdownMenuRadioGroup
              value={filters?.team}
              onValueChange={(value) => handleFilterChange("team", value)}
            >
              {teamsFilterValues?.map((value, index) => (
                <DropdownMenuRadioItem key={index} value={value}>
                  {value}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4  lg:w-1/2">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="w-full lg:w-1/2 h-[50px] border-2 rounded-xl"
          >
            <Button variant="outline" className="!py-2">
              <div className="w-full flex gap-3 !items-center !justify-between ">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border bg-[#6b7280] w-8 h-8 flex items-center justify-center text-white">
                    {DateFilterIcon ? DateFilterIcon : <></>}
                  </div>
                  <span className="font-normal text-[15px]">
                    {filters.date}
                  </span>
                </div>
                <ChevronDown />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!w-[200px]">
            <DropdownMenuRadioGroup
              value={filters?.date}
              onValueChange={(value) => handleFilterChange("date", value)}
            >
              {dateFilterValues?.map((value, index) => (
                <DropdownMenuRadioItem key={index} value={value}>
                  {value}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          className="bg-[#e4e6eb] text-[#464f5e] hover:bg-[#e4e6eb] border-2 border-[#e4e6eb] hover:border-[#464f5e] "
          onClick={() =>
            setFilters({
              user: "All",
              team: "All",
              date: "Today",
            })
          }
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default Filters;
