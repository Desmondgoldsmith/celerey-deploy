import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Ellipsis } from "lucide-react";
import { AssetAllocationProps } from "../../types";
import { riskCategories } from "../../constants";

const AssetAllocationDashboard = ({
  userName = "Micheal",
  riskAttitude = "Somewhat Aggressive",
  netWorth = 103650.0,
  investmentExperience = "Advanced",
  riskAllocation = {
    low: 33,
    medium: 49,
    high: 17,
  },
}: AssetAllocationProps) => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - User Info */}
          <div className="lg:col-span-4">
            <Card className="h-full">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-medium">
                    Hello {userName} welcome to your Celerey dashboard.
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-500">Risk Attitude</p>
                      <p className="text-navyLight">{riskAttitude}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Net Worth</p>
                      <p className="text-NavyLight">
                        ${netWorth.toLocaleString()}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Investment Experience
                      </p>
                      <p className="text-NavyLight">{investmentExperience}</p>
                    </div>
                  </div>
                </div>

                <div className="relative pt-6">
                  <div className="absolute top-0 right-0">
                    <button className="p-2">
                      <Ellipsis className="h-6 w-6 text-gray-400" />
                    </button>
                  </div>

                  <h3 className="text-sm text-gray-500 mb-4">
                    Risk Allocation
                  </h3>
                  <div className="flex items-center justify-between space-x-4">
                    {/* Risk allocation circles */}
                    <div className="flex-1">
                      <div className="relative h-20 w-20">
                        <div className="absolute inset-0 rounded-full border-8 border-green-200">
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              clipPath: `polygon(0 0, 100% 0, 100% ${riskAllocation.low}%, 0 ${riskAllocation.low}%)`,
                            }}
                          >
                            <span className="text-sm font-medium">
                              {riskAllocation.low}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-center">Low</p>
                    </div>

                    <div className="flex-1">
                      <div className="relative h-20 w-20">
                        <div className="absolute inset-0 rounded-full border-8 border-yellow-200">
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              clipPath: `polygon(0 0, 100% 0, 100% ${riskAllocation.medium}%, 0 ${riskAllocation.medium}%)`,
                            }}
                          >
                            <span className="text-sm font-medium">
                              {riskAllocation.medium}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-center">Medium</p>
                    </div>

                    <div className="flex-1">
                      <div className="relative h-20 w-20">
                        <div className="absolute inset-0 rounded-full border-8 border-red-200">
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              clipPath: `polygon(0 0, 100% 0, 100% ${riskAllocation.high}%, 0 ${riskAllocation.high}%)`,
                            }}
                          >
                            <span className="text-sm font-medium">
                              {riskAllocation.high}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-center">High</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Risk Categories */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(riskCategories).map(([risk, investments]) => (
              <Card key={risk} className="h-full">
                <CardHeader className="p-6">
                  <h3 className="text-lg font-medium capitalize">
                    {risk} Risk
                  </h3>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="mb-6">
                    <div className="h-32 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="h-24 w-24 bg-gray-200 rounded-lg" />
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {investments.map((investment, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {investment}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetAllocationDashboard;
