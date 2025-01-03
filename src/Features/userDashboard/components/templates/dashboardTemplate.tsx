"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { DashboardProps } from "../../types";
import { PortfolioChart } from "../molecules/portfolioChart";
import { GeographicSpread } from "../molecules/geographicSpread";
import { RiskAllocation } from "./riskAllocationCharts";
import { AssetAllocation } from "../molecules/assetAllocationChart";
import { Goals } from "../molecules/goalsChart";
import { UserProfile } from "../molecules/userProfile";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-lg" />,
});

const Dashboard: React.FC<DashboardProps> = ({
  userName,
  netWorth,
  riskAttitude,
  investmentExperience,
  portfolioData,
  goals,
}) => {
  const [timeframe, setTimeframe] = useState<"1D" | "1W" | "1M" | "3M" | "1Y">(
    "1M"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - User Profile */}
          <div className="lg:col-span-4">
            <UserProfile
              userName={userName}
              netWorth={netWorth}
              riskAttitude={riskAttitude}
              investmentExperience={investmentExperience}
            />
          </div>

          {/* Right Column - Charts and Data */}
          <div className="lg:col-span-8 space-y-6">
            {/* Portfolio Performance */}
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-cirka text-navy">
                  Portfolio Performance
                </h2>
                <div className="flex space-x-2">
                  {["1D", "1W", "1M", "3M", "1Y"].map((period) => (
                    <button
                      key={period}
                      onClick={() => setTimeframe(period as any)}
                      className={`px-4 py-2 rounded-full text-sm font-helvetica
                        ${
                          timeframe === period
                            ? "bg-navy text-white"
                            : "text-gray-500 hover:bg-gray-100"
                        }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <PortfolioChart
                data={portfolioData}
                Chart={Chart}
                timeframe={timeframe}
              />
            </Card>

            {/* Risk and Asset Allocation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RiskAllocation Chart={Chart} />
              <AssetAllocation Chart={Chart} />
            </div>

            {/* Goals and Geographic Spread */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Goals goals={goals} Chart={Chart} />
              <GeographicSpread />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
