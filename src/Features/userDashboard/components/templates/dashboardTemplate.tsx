// components/templates/dashboardTemplate.tsx
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { DashboardProps } from "../../types";
import { PortfolioChart } from "../molecules/portfolioChart";
import { GeographicSpread } from "../molecules/geographicSpread";
import { RiskAllocation } from "../molecules/riskAllocationCharts";
import { AssetAllocation } from "../molecules/assetAllocationChart";
import { Goals } from "../molecules/goalsChart";
import { UserProfile } from "../molecules/userProfile";
import { IncomeVsExpenditure } from "../molecules/incomeVsExpenditure";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-gray-100 rounded-lg" />
  ),
});

const DashboardTemplate: React.FC<DashboardProps> = ({
  userName = "Jude",
  netWorth = 103550.0,
  riskAttitude = "Somewhat Aggressive",
  investmentExperience = "Advanced",
  portfolioData,
  goals,
}) => {
  const [timeframe, setTimeframe] = useState<"1D" | "1W" | "1M" | "3M" | "1Y">(
    "1M"
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Increased width */}
          <div className="col-span-4">
            <div className="space-y-6">
              <UserProfile
                userName={userName}
                netWorth={netWorth}
                riskAttitude={riskAttitude}
                investmentExperience={investmentExperience}
              />
              <Goals Chart={Chart} />
            </div>
          </div>

          {/* Middle Column - Reduced width */}
          <div className="col-span-5 space-y-6">
            <PortfolioChart
              Chart={Chart}
              timeframe={timeframe}
              onTimeframeChange={setTimeframe}
            />
            <GeographicSpread />
          </div>

          {/* Right Column */}
          <div className="col-span-3 space-y-6">
            <RiskAllocation Chart={Chart} />
            <AssetAllocation Chart={Chart} />
            <div className="col-span-3 space-y-6">
              <IncomeVsExpenditure Chart={Chart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
