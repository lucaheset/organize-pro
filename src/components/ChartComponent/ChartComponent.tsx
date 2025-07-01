"use client";

import { BarChart3, Pencil, TrendingUp } from "lucide-react";
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
import React, { useState } from "react";
import { saveChartDataState, loadChartDataState } from "@/utils/localStorage";

// Simple Modal implementation
function Modal({
  open,
  onClose,
  onSubmit,
  months,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (month: string, value: number) => void;
  months: string[];
}) {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [value, setValue] = useState<number>(0);

  React.useEffect(() => {
    setSelectedMonth(months[0]);
    setValue(0);
  }, [open, months]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 min-w-[300px]">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Alter month value
        </h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Mês</label>
          <select
            className="w-full border rounded px-2 py-1"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">New Value</label>
          <input
            type="number"
            className="w-full border rounded px-2 py-1"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => {
              onSubmit(selectedMonth, value);
              onClose();
            }}
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export function ChartComponent() {
  const [chartDataState, setChartDataState] = useState<any[]>(() => {
    const stored = loadChartDataState();
    return stored && Array.isArray(stored) ? stored : [];
  });
  const [modalOpen, setModalOpen] = useState(false);

  const months = chartDataState.map((item) => item.month);

  const handleModalSubmit = (month: string, value: number) => {
    setChartDataState((prev) =>
      prev.map((item) =>
        item.month === month ? { ...item, desktop: value } : item
      )
    );
  };

  React.useEffect(() => {
    try {
      localStorage.setItem("chartDataState", JSON.stringify(chartDataState));
    } catch {
      console.error("Failed to save chartDataState to localStorage");
    }
  }, [chartDataState]);

  return (
    <Card className="h-full bg-gray-900 min-w-[350px] min-h-[300px] overflow-hidden w-full">
      <CardHeader>
        <CardTitle className="text-gray-200">Expenses Chart</CardTitle>
        <CardDescription className="text-muted-foreground">
          January - June 2024
        </CardDescription>
        <CardAction className="flex gap-5 items-center justify-center">
          <button
            className="mt-2 w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-green-700 transition self-center cursor-pointer z-50"
            onClick={() => setModalOpen(true)}
            title="Alter month value"
            type="button"
            style={{ cursor: "pointer" }}
          >
            <Pencil className="w-5 h-5 pointer-events-none" />
          </button>
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
        </CardAction>
      </CardHeader>

      <CardContent className="overflow-visible flex flex-col gap-4 justify-center items-center">
        <div className="w-full h-[100px] flex justify-center items-center">
          <ChartContainer
            config={chartConfig}
            className="min-h-[200px] max-h-[250px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartDataState}
                margin={{ top: 70, left: 15, right: 15, bottom: 10 }}
              >
                <CartesianGrid vertical={false} stroke="#374151" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={16}
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

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleModalSubmit}
          months={months}
        />
      </CardContent>
    </Card>
  );
}
