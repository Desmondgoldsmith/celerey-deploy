"use client";

import { DashboardLayout } from "@/Features/userDashboard/components/templates/dashboardLayout";
import DashboardTemplate from "@/Features/userDashboard/components/templates/dashboardTemplate";

const defaultGoals = [
  {
    name: "Family Holiday",
    progress: 75,
    target: 3500,
    currentAmount: 2625,
  },
  {
    name: "Pension Plan",
    progress: 65,
    target: 18221,
    currentAmount: 11843.65,
  },
  {
    name: "Debt Reduction",
    progress: 30,
    target: 1000,
    currentAmount: 300,
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardTemplate
        userName="Jude"
        netWorth="$103,550.00"
        riskAttitude="Somewhat Aggressive"
        investmentExperience="Advanced"
        portfolioData={[]}
        goals={defaultGoals}
      />
    </DashboardLayout>
  );
}
