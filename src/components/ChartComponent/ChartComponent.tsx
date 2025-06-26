"use client";

import { BarChart3, TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
} from "recharts";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6",
  },
  mobile: {
    label: "Mobile",
    color: "#ef4444",
  },
} satisfies ChartConfig;
export function ChartComponent() {
  return (
    <Card className="bg-gray-900 max-w-225 h-75 min-w-100 overflow-hidden min-h-75">
      <CardHeader>
        <CardTitle className="text-gray-200">Line Chart - Label</CardTitle>
        <CardDescription className="text-muted-foreground">
          January - June 2024
        </CardDescription>
        <CardAction>
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
        </CardAction>
      </CardHeader>
<CardContent className="overflow-hidden">
  <div className="w-full max-h-[260px] h-full">
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" aspect={2.5}>
        <LineChart
          data={chartData}
          margin={{ top: 16, left: 15, right: 15, bottom: 40 }}
        >
          <CartesianGrid vertical={false} stroke="#374151" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={6}
            tickFormatter={(value) => String(value).slice(0, 3)}
            tick={{ fill: "#9ca3af" }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: "6px",
              color: "#ffffff",
            }}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: "#3b82f6" }}
            activeDot={{ r: 6, fill: "#3b82f6" }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-gray-200"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </div>
</CardContent>

    </Card>
  );
}
