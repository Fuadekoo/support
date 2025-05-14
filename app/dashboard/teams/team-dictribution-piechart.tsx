"use client";
import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function TeamDistributionPieChat() {
  const data = [
    { name: "Engineering", value: 500, color: "#4F8A8B" },
    { name: "Design", value: 250, color: "#FBD46D" },
    { name: "Marketing", value: 150, color: "#F76B8A" },
    { name: "Sales", value: 100, color: "#A8D8EA" },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie data={data} dataKey={"value"} nameKey={"name"}>
            {data.map((dataItem, i) => (
              <Cell key={i} fill={dataItem.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
