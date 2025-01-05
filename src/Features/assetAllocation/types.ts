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

export type SubscriptionTier = {
  name: string;
  price: number;
  interval: "yearly" | "biennial";
  description: string;
  features: string[];
  intro: string;
  buttonText?: string;
};
