import React from "react";
import { TodoTableComponent } from "../TableComponent/TableComponent";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "../ui/card";
import { TrendingUp, Zap } from "lucide-react";

const ProductivityComponent = () => {
  return (
    <Card className="bg-gray-900 border-0 text-gray-200 min-h-75 min-w-30">
      <CardHeader>
        <CardTitle>Productivity</CardTitle>
        <CardDescription>This week</CardDescription>
        <CardAction>
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center mb-4">
          <div className="relative w-24 h-24">
            <svg
              className="w-24 h-24 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgb(31, 41, 55)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#productivityGradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${87 * 2.51} ${100 * 2.51}`}
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
              <defs>
                <linearGradient id="productivityGradient">
                  <stop offset="0%" stopColor="rgb(16, 185, 129)" />
                  <stop offset="100%" stopColor="rgb(20, 184, 166)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">87%</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-emerald-400 text-sm flex items-center justify-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            +5% esta semana
          </p>
          <p className="text-gray-400 text-xs mt-1">
            23 of 26 tasks completed.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductivityComponent;
