"use client";

import { Area, AreaChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked area chart";

const chartConfig = {
  stress: {
    label: "Stress",
    color: "#E8647C",
  },
  load: {
    label: "Load",
    color: "#FC6B3F",
  },
};

export function Charts() {
  const [chartData, setChartData] = useState([]);

  // Function to generate random data points and update the chart data
  const simulateLiveData = () => {
    setChartData((prevData) => {
      // Generate new data point
      const newStress = Math.max(Math.floor(Math.random() * 20 + 20), 0); // Random stress value
      const newLoad = Math.max(Math.floor(Math.random() * 30 + 20), 0); // Random load value
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }); // Current time formatted

      // Create a new data entry
      const newEntry = {
        time: currentTime,
        stress: newStress,
        load: newLoad,
      };

      // Append new entry and clip to latest 10 data points
      const updatedData = prevData.length >= 10
        ? [...prevData.slice(1), newEntry]
        : [...prevData, newEntry];

      return updatedData;
    });
  };

  // Set up the interval to simulate data updates
  useEffect(() => {
    const interval = setInterval(simulateLiveData, 1000); // Update every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-black text-white border border-gray-600 mt-3">
      <CardHeader>
        <CardTitle>Active Stress and Load</CardTitle>
        <CardDescription>
          Showing real-time Stress and Load
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)} // Format time to show hours and minutes
            />
           
            <ChartTooltip className="bg-black"
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="stress"
              type="natural"
              fill="var(--color-stress)"
              fillOpacity={0.6}
              stroke="var(--color-stress)"
              stackId="a"
            />
            <Area
              dataKey="load"
              type="natural"
              fill="var(--color-load)"
              fillOpacity={0.4}
              stroke="var(--color-load)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
