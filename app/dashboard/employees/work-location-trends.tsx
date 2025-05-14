"use client";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", office: 82, wfh: 44 },
  { name: "Feb", office: 12, wfh: 34 },
  { name: "Mar", office: 22, wfh: 54 },
  { name: "Apr", office: 32, wfh: 64 },
  { name: "May", office: 42, wfh: 74 },
  { name: "Jun", office: 52, wfh: 84 },
  { name: "Jul", office: 62, wfh: 94 },
  { name: "Aug", office: 72, wfh: 104 },
  { name: "Sep", office: 82, wfh: 114 },
  { name: "Oct", office: 92, wfh: 124 },
  { name: "Nov", office: 102, wfh: 134 },
  { name: "Dec", office: 112, wfh: 144 },
];

function WorkLocationTrends() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart
        data={data}
        className="[&_.recharts-tooltip-cursor]:fill-white/10 dark:[&_.recharts-tooltip-cursor]:bg-black/5"
      >
        <Tooltip
          formatter={(value, name) => {
            if (name === "wfh") {
              return [value, "work from home"];
            } else if (name === "office") {
              return [value, "work from office"];
            }
          }}
          labelClassName="font-bold"
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border "
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "wfh") {
              return <div>work from home</div>;
            } else if (value === "office") {
              return <div className="text-sm">work from office</div>;
            }
          }}
        />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Bar dataKey="office" stackId={1} fill="#ec4899" />
        <Bar dataKey="wfh" stackId={1} fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WorkLocationTrends;
