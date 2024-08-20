import React from "react";

const AnalylicsCount = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:w-1/2">
        <Card title="Page Views" count="54" />
        <Card title="Clicks" count="3" />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:w-1/2">
        <Card title="CTR" count="7%" />
        <Card title="Leads Generated" count="10" />
      </div>
    </div>
  );
};

const Card = ({ title, count }) => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="bg-white rounded-lg shadow-sm px-4 py-7 flex flex-col items-start justify-center">
        <span className="text-[21px] font-medium">{title}</span>
        <span className="text-[15px] font-medium text-[#6b7280]">{count}</span>
      </div>
    </div>
  );
};

export default AnalylicsCount;
