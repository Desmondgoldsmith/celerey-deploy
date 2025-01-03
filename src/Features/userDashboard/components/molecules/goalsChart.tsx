import React from "react";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface GoalProps {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Chart: any;
  goals: {
    name: string;
    progress: number;
    target: number;
  }[];
}

export const Goals: React.FC<GoalProps> = ({ Chart, goals }) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-cirka text-navy">Saving Goals</h2>
        <Plus className="h-6 w-6 text-navy cursor-pointer" />
      </div>
      <div className="grid gap-6">
        {goals.map((goal) => (
          <div key={goal.name} className="flex items-center gap-4">
            <React.Suspense
              fallback={
                <div className="h-16 w-16 animate-pulse bg-gray-100 rounded-full" />
              }
            >
              <Chart
                options={{
                  chart: { type: "radialBar" },
                  colors: ["#6B4EFF"],
                  plotOptions: {
                    radialBar: {
                      hollow: { size: "60%" },
                      dataLabels: {
                        name: { show: false },
                        value: {
                          formatter: (val: number) => `${val}%`,
                          fontSize: "14px",
                          fontFamily: "Helvetica",
                        },
                      },
                    },
                  },
                }}
                series={[goal.progress]}
                type="radialBar"
                height={80}
                width={80}
              />
            </React.Suspense>
            <div>
              <h3 className="text-sm font-helvetica text-gray-900">
                {goal.name}
              </h3>
              <p className="text-sm font-helvetica text-gray-500">
                ${goal.target.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
