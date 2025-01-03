import React from "react";
import { ApexOptions } from "apexcharts";
import { PortfolioChartProps } from "../../types";

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

  return (
    <div className="h-[300px] mt-4">
      <Chart options={chartOptions} series={series} type="area" height="100%" />
    </div>
  );
};
