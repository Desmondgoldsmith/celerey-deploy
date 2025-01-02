export interface AssetAllocationProps {
  userName: string;
  riskAttitude: string;
  netWorth: number;
  investmentExperience: string;
  riskAllocation: {
    low: number;
    medium: number;
    high: number;
  };
}
