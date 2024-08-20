import React from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";

// Sample data for performers with Indian names
const indianNames = [
  "Arjun Kumar",
  "Saanvi Sharma",
  "Rohan Gupta",
  "Isha Patel",
  "Aarav Singh",
  "Ananya Verma",
  "Vivaan Joshi",
  "Aditi Mehta",
  "Reyansh Agarwal",
  "Diya Rao",
  "Kabir Deshmukh",
  "Navya Reddy",
  "Ayaan Roy",
  "Kiara Nair",
  "Krishna Yadav",
  "Advika Sharma",
  "Aryan Malhotra",
  "Sneha Nair",
  "Aadhya Iyer",
  "Nikhil Kapoor",
  "Riya Shah",
  "Devansh Chauhan",
  "Ishaan Mittal",
  "Mira Sen",
  "Arnav Mishra",
  "Tara Shetty",
  "Dev Patel",
  "Radhika Kapoor",
  "Ayush Khanna",
  "Shruti Menon",
  "Kavya Sethi",
  "Shaurya Goel",
  "Anvi Bajaj",
  "Neel Sharma",
  "Prisha Chopra",
  "Aditya Jain",
  "Zoya Reddy",
  "Hrithik Sinha",
  "Myra Kapoor",
  "Rudra Bhatia",
  "Naina Singh",
  "Vedant Malhotra",
  "Aarohi Verma",
  "Lakshay Sharma",
  "Simran Kaur",
  "Yash Mehra",
  "Tanishq Agarwal",
  "Pari Joshi",
  "Daksh Sharma",
  "Reva Rao",
];

const performeres = indianNames.map((name, i) => ({
  id: i + 1,
  name: name,
  photo: `https://via.placeholder.com/40?text=${i + 1}`, // Placeholder image
  totalSales: Math.floor(Math.random() * 1000) + 1, // Random sales count
}));

const TopPerformer = () => {
  return (
    <ScrollArea className="h-[25rem] w-full lg:rounded-md rounded-sm border">
      <div className="p-4">
        <h4 className="mb-4 lg:text-lg text-sm font-semibold leading-none">
          Top Performers
        </h4>
        {performeres.map((performer) => (
          <>
            <div
              key={performer.id}
              className="flex items-center space-x-4 mb-2.5"
            >
              <span className="lg:text-base text-sm font-semibold text-[#3c82f6]">
                {performer.id}
              </span>
              <img
                src={performer.photo}
                alt={`${performer.name}'s photo`}
                className=" w-6 h-6 lg:w-9 lg:h-9 rounded-full"
              />
              <div className="flex items-center justify-between w-full">
                <div className="lg:text-base text-xs font-medium">
                  {performer.name}
                </div>
                <div className="lg:text-base text-xs text-gray-500">
                  {performer.totalSales}
                </div>
              </div>
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
};

export default TopPerformer;
