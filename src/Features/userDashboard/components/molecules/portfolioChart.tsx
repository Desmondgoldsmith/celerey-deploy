import React from "react";
import { ApexOptions } from "apexcharts";
import { ChartData, PortfolioChartProps, TimeframeKey } from "../../types";

export const PortfolioChart: React.FC<PortfolioChartProps> = ({
  data,
  Chart,
}) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#6B4EFF"], // navyLight color
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toLocaleString()}`,
        style: {
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      y: {
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
  };

  const series = [
    {
      name: "Portfolio Value",
      data: data.map((item) => [
        new Date(item.timestamp).getTime(),
        item.value,
      ]),
    },
  ];

  const getTimeframeData = (timeframe: string): ChartData[] => {
    const key = `${timeframe.toLowerCase()}Data` as TimeframeKey;
    return data[key] || [];
  };

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
              data: getTimeframeData(timeframe).map((item) => [
                new Date(item.timestamp).getTime(),
                item.value,
              ]),
            },
          ]}
          type="area"
          height="100%"
        />
      </React.Suspense>
    </div>
  );
};
