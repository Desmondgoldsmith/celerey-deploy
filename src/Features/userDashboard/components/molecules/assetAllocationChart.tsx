import React from "react";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

interface AssetAllocationProps {
  Chart: any;
}

export const AssetAllocation: React.FC<AssetAllocationProps> = ({ Chart }) => {
  const assets = [
    { name: "Real Estate", value: 5980000, color: "#6B4EFF" },
    { name: "Fixed Income", value: 2000000, color: "#4CAF50" },
    { name: "Bonds", value: 1500000, color: "#FFA726" },
    { name: "Cash", value: 500000, color: "#EF5350" },
  ];

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
      },
    },
    colors: assets.map((asset) => asset.color),
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Total Assets"],
      labels: {
        formatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
        style: { fontFamily: "Helvetica" },
      },
    },
    yaxis: { show: false },
    legend: {
      position: "right",
      fontFamily: "Helvetica",
      markers: { radius: 12 },
    },
  };

  const series = assets.map((asset) => ({
    name: asset.name,
    data: [asset.value],
  }));

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-cirka text-navy">Asset Allocation</h2>
        <MoreHorizontal className="h-6 w-6 text-gray-400 cursor-pointer" />
      </div>
      <div className="h-[200px]">
        <React.Suspense
          fallback={
            <div className="h-full w-full animate-pulse bg-gray-100 rounded-lg" />
          }
        >
          <Chart
            options={chartOptions}
            series={series}
            type="bar"
            height="100%"
          />
        </React.Suspense>
      </div>
    </Card>
  );
};
