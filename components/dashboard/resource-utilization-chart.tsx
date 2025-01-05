"use client";

import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Available", value: 60 },
  { name: "In Use", value: 30 },
  { name: "Maintenance", value: 10 },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"];

export function ResourceUtilizationChart() {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Resource Utilization</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
        {pieData.map((entry, index) => (
          <div key={entry.name} className="text-center">
            <div className="font-medium">{entry.name}</div>
            <div className="text-muted-foreground">{entry.value}%</div>
          </div>
        ))}
      </div>
    </Card>
  );
}