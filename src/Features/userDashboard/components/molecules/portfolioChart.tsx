import React from "react";
import { ApexOptions } from "apexcharts";
import { ChartData, PortfolioChartProps, TimeframeKey } from "../../types";

export const PortfolioChart: React.FC<PortfolioChartProps> = ({
  data,
  Chart,
  timeframe,
}) => {
  // Function to convert timeframe to data key
  const getTimeframeData = (tf: string): ChartData[] => {
    const keyMap: Record<string, TimeframeKey> = {
      "1D": "daily",
      "1W": "weekly",
      "1M": "monthly",
      "3M": "quarterly",
      "1Y": "yearly",
    };

    const key = keyMap[tf];
    return data[key] || [];
  };

  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#6B4EFF"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 100],
        colorStops: [
          { offset: 0, color: "#6B4EFF", opacity: 0.45 },
          { offset: 100, color: "#6B4EFF", opacity: 0.05 },
        ],
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    dataLabels: { enabled: false },
    xaxis: {
      type: "datetime",
      labels: {
        style: { fontFamily: "Helvetica, Arial, sans-serif" },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toLocaleString()}`,
        style: { fontFamily: "Helvetica, Arial, sans-serif" },
      },
    },
    tooltip: {
      x: { format: "dd MMM yyyy" },
      y: { formatter: (value) => `$${value.toLocaleString()}` },
    },
  };

  const chartData = getTimeframeData(timeframe).map((item) => [
    new Date(item.timestamp).getTime(),
    item.value,
  ]);

  return (
    <div className="h-[300px] mt-4">
      <React.Suspense
        fallback={
          <div className="h-full w-full animate-pulse bg-gray-100 rounded-lg" />
        }
      >
        <Chart
          options={chartOptions}
          series={[
            {
              name: "Portfolio Value",
              data: chartData,
            },
          ]}
          type="area"
          height="100%"
        />
      </React.Suspense>
    </div>
  );
};
