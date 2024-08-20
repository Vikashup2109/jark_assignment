"use client";

import React, { useState } from "react";
import DropdownMenuComp from "./DropDown/page";
import { CalendarFold, Group, User } from "lucide-react";
import { Button } from "../../components/ui/button";

const Filters = () => {
  const [filters, setFilters] = useState({
    user: "All",
    team: "All",
    date: "Today",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
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
        <DropdownMenuComp
          filterValues={usersFilterValues}
          filterIcon={userFilterIcon}
          selectedValue={filters.user}
          onValueChange={(value) => handleFilterChange("user", value)}
        />
        <DropdownMenuComp
          filterValues={teamsFilterValues}
          filterIcon={teamsFilterIcon}
          selectedValue={filters.team}
          onValueChange={(value) => handleFilterChange("team", value)}
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4  lg:w-1/2">
        <DropdownMenuComp
          filterValues={dateFilterValues}
          filterIcon={DateFilterIcon}
          selectedValue={filters.date}
          onValueChange={(value) => handleFilterChange("date", value)}
        />
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
