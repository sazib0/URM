import { ResourceUtilizationChart } from "@/components/dashboard/resource-utilization-chart";
import { ResourceUsageTrend } from "@/components/dashboard/resource-usage-trend";
import { LastUpdated } from "@/components/dashboard/last-updated";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <LastUpdated />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ResourceUtilizationChart />
        <ResourceUsageTrend />
      </div>
    </div>
  );
}