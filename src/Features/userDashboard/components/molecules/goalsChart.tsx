import React from "react";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface Goal {
  name: string;
  progress: number;
  target: number;
  lastUpdated: string;
  amount: number;
}

interface GoalProps {
  Chart: any;
}

export const Goals: React.FC<GoalProps> = ({ Chart }) => {
  const goals: Goal[] = [
    {
      name: "Family Holiday",
      progress: 80,
      target: 8505,
      amount: 6805,
      lastUpdated: "Last updated 07.12.23",
    },
    {
      name: "Pension Boost",
      progress: 50,
      target: 15221,
      amount: 13221,
      lastUpdated: "Last updated 07.12.23",
    },
    {
      name: "Debt Reduction",
      progress: 20,
      target: 1001,
      amount: 1001,
      lastUpdated: "Last updated 07.12.23",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <h2 className="text-xl font-cirka text-navy">Saving Goals</h2>
        <div className="bg-navy rounded-full p-2 cursor-pointer hover:bg-navy/90 transition-colors">
          <Plus className="h-4 w-4 text-white" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {goals.map((goal) => (
          <div
            key={goal.name}
            className="bg-white rounded-lg p-4 border border-gray-100"
          >
            <div className="text-sm font-helvetica text-gray-900 mb-3">
              {goal.name}
            </div>

            <div className="flex justify-center mb-3">
              <Chart
                options={{
                  chart: {
                    type: "radialBar",
                    height: 120,
                    sparkline: { enabled: true },
                  },
                  colors: ["#6B4EFF"],
                  plotOptions: {
                    radialBar: {
                      hollow: { size: "60%" },
                      track: { background: "#E5E7EB" },
                      dataLabels: {
                        name: { show: false },
                        value: {
                          fontSize: "16px",
                          fontFamily: "Helvetica",
                          fontWeight: "500",
                          formatter: (val: number) => `${val}%`,
                        },
                      },
                    },
                  },
                }}
                series={[goal.progress]}
                type="radialBar"
                height={120}
              />
            </div>

            <div className="text-center">
              <div className="text-lg font-helvetica font-medium text-gray-900">
                ${goal.amount.toLocaleString()}
              </div>
              <div className="text-xs font-helvetica text-gray-500 mt-1">
                {goal.lastUpdated}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
