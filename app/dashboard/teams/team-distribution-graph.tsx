"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 1890 },
  { name: "Jun", sales: 2390 },
];

export default function TeamDistributionGraph() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width={"100%"} height="100%">
        <LineChart
          data={data}
          className="[$_.recharts-tooltip-cursor]:fill-white/10 dark:[$_.recharts-tooltip-cursor]:bg-black/5"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend formatter={(value) => <span>{value}</span>} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
