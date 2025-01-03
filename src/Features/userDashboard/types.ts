export interface ChartData {
  timestamp: string;
  value: number;
}

export interface PortfolioData {
  dailyData: ChartData[];
  weeklyData: ChartData[];
  monthlyData: ChartData[];
  quarterlyData: ChartData[];
  yearlyData: ChartData[];
}

export interface Goal {
  name: string;
  progress: number;
  target: number;
}

export interface DashboardProps {
  userName: string;
  netWorth: number;
  riskAttitude: string;
  investmentExperience: string;
  portfolioData: PortfolioData;
  goals: Goal[];
}
