"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
const chartData = [
  { date: "2024-04-01", views: 222, clicks: 150 },
  { date: "2024-04-02", views: 97, clicks: 180 },
  { date: "2024-04-03", views: 167, clicks: 120 },
  { date: "2024-04-04", views: 242, clicks: 260 },
  { date: "2024-04-05", views: 373, clicks: 290 },
  { date: "2024-04-06", views: 301, clicks: 340 },
  { date: "2024-04-07", views: 245, clicks: 180 },
  { date: "2024-04-08", views: 409, clicks: 320 },
  { date: "2024-04-09", views: 59, clicks: 110 },
  { date: "2024-04-10", views: 261, clicks: 190 },
  { date: "2024-04-11", views: 327, clicks: 350 },
  { date: "2024-04-12", views: 292, clicks: 210 },
  { date: "2024-04-13", views: 342, clicks: 380 },
  { date: "2024-04-14", views: 137, clicks: 220 },
  { date: "2024-04-15", views: 120, clicks: 170 },
  { date: "2024-04-16", views: 138, clicks: 190 },
  { date: "2024-04-17", views: 446, clicks: 360 },
  { date: "2024-04-18", views: 364, clicks: 410 },
  { date: "2024-04-19", views: 243, clicks: 180 },
  { date: "2024-04-20", views: 89, clicks: 150 },
  { date: "2024-04-21", views: 137, clicks: 200 },
  { date: "2024-04-22", views: 224, clicks: 170 },
  { date: "2024-04-23", views: 138, clicks: 230 },
  { date: "2024-04-24", views: 387, clicks: 290 },
  { date: "2024-04-25", views: 215, clicks: 250 },
  { date: "2024-04-26", views: 75, clicks: 130 },
  { date: "2024-04-27", views: 383, clicks: 420 },
  { date: "2024-04-28", views: 122, clicks: 180 },
  { date: "2024-04-29", views: 315, clicks: 240 },
  { date: "2024-04-30", views: 454, clicks: 380 },
  { date: "2024-05-01", views: 165, clicks: 220 },
  { date: "2024-05-02", views: 293, clicks: 310 },
  { date: "2024-05-03", views: 247, clicks: 190 },
  { date: "2024-05-04", views: 385, clicks: 420 },
  { date: "2024-05-05", views: 481, clicks: 390 },
  { date: "2024-05-06", views: 498, clicks: 520 },
  { date: "2024-05-07", views: 388, clicks: 300 },
  { date: "2024-05-08", views: 149, clicks: 210 },
  { date: "2024-05-09", views: 227, clicks: 180 },
  { date: "2024-05-10", views: 293, clicks: 330 },
  { date: "2024-05-11", views: 335, clicks: 270 },
  { date: "2024-05-12", views: 197, clicks: 240 },
  { date: "2024-05-13", views: 197, clicks: 160 },
  { date: "2024-05-14", views: 448, clicks: 490 },
  { date: "2024-05-15", views: 473, clicks: 380 },
  { date: "2024-05-16", views: 338, clicks: 400 },
  { date: "2024-05-17", views: 499, clicks: 420 },
  { date: "2024-05-18", views: 315, clicks: 350 },
  { date: "2024-05-19", views: 235, clicks: 180 },
  { date: "2024-05-20", views: 177, clicks: 230 },
  { date: "2024-05-21", views: 82, clicks: 140 },
  { date: "2024-05-22", views: 81, clicks: 120 },
  { date: "2024-05-23", views: 252, clicks: 290 },
  { date: "2024-05-24", views: 294, clicks: 220 },
  { date: "2024-05-25", views: 201, clicks: 250 },
  { date: "2024-05-26", views: 213, clicks: 170 },
  { date: "2024-05-27", views: 420, clicks: 460 },
  { date: "2024-05-28", views: 233, clicks: 190 },
  { date: "2024-05-29", views: 78, clicks: 130 },
  { date: "2024-05-30", views: 340, clicks: 280 },
  { date: "2024-05-31", views: 178, clicks: 230 },
  { date: "2024-06-01", views: 178, clicks: 200 },
  { date: "2024-06-02", views: 470, clicks: 410 },
  { date: "2024-06-03", views: 103, clicks: 160 },
  { date: "2024-06-04", views: 439, clicks: 380 },
  { date: "2024-06-05", views: 88, clicks: 140 },
  { date: "2024-06-06", views: 294, clicks: 250 },
  { date: "2024-06-07", views: 323, clicks: 370 },
  { date: "2024-06-08", views: 385, clicks: 320 },
  { date: "2024-06-09", views: 438, clicks: 480 },
  { date: "2024-06-10", views: 155, clicks: 200 },
  { date: "2024-06-11", views: 92, clicks: 150 },
  { date: "2024-06-12", views: 492, clicks: 420 },
  { date: "2024-06-13", views: 81, clicks: 130 },
  { date: "2024-06-14", views: 426, clicks: 380 },
  { date: "2024-06-15", views: 307, clicks: 350 },
  { date: "2024-06-16", views: 371, clicks: 310 },
  { date: "2024-06-17", views: 475, clicks: 520 },
  { date: "2024-06-18", views: 107, clicks: 170 },
  { date: "2024-06-19", views: 341, clicks: 290 },
  { date: "2024-06-20", views: 408, clicks: 450 },
  { date: "2024-06-21", views: 169, clicks: 210 },
  { date: "2024-06-22", views: 317, clicks: 270 },
  { date: "2024-06-23", views: 480, clicks: 530 },
  { date: "2024-06-24", views: 132, clicks: 180 },
  { date: "2024-06-25", views: 141, clicks: 190 },
  { date: "2024-06-26", views: 434, clicks: 380 },
  { date: "2024-06-27", views: 448, clicks: 490 },
  { date: "2024-06-28", views: 149, clicks: 200 },
  { date: "2024-06-29", views: 103, clicks: 160 },
  { date: "2024-06-30", views: 446, clicks: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  views: {
    label: "views",
    color: "hsl(var(--chart-1))",
  },
  clicks: {
    label: "clicks",
    color: "hsl(var(--chart-2))",
  },
};
const Activity = () => {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Activity</CardTitle>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillviews" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-views)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-views)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillclicks" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-clicks)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-clicks)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="clicks"
              type="natural"
              fill="url(#fillclicks)"
              stroke="var(--color-clicks)"
              stackId="a"
            />
            <Area
              dataKey="views"
              type="natural"
              fill="url(#fillviews)"
              stroke="var(--color-views)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Activity;
