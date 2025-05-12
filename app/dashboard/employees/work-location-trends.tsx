"use client";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

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
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Bar dataKey="office" stackId={1} fill="#ec4899" />
        <Bar dataKey="wfh" stackId={1} fill="#6b7280" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default WorkLocationTrends;
