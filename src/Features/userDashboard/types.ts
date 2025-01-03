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

export interface ChartData {
  timestamp: string;
  value: number;
}

export type TimeframeKey =
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "yearly";

export interface PortfolioData {
  daily: ChartData[];
  weekly: ChartData[];
  monthly: ChartData[];
  quarterly: ChartData[];
  yearly: ChartData[];
}

export interface PortfolioChartProps {
  data: PortfolioData;
  Chart: any;
  timeframe: "1D" | "1W" | "1M" | "3M" | "1Y";
}
