import Link from "next/link";
import { SubscriptionTier } from "../../types";
import { FeaturesList } from "./featureList";
import { ToggleButton } from "./toggleButton";

interface PricingCardProps {
  tier: SubscriptionTier;
  interval: "yearly" | "biennial";
  onIntervalChange: (interval: "yearly" | "biennial") => void;
}

export const PricingCard = ({
  tier,
  interval,
  onIntervalChange,
}: PricingCardProps) => {
  // Calculate price based on interval
  const calculatePrice = () => {
    const yearlyPrice = tier.price * 12;
    return interval === "yearly" ? yearlyPrice : yearlyPrice * 2;
  };

  return (
    <div className="bg-[#F4F5F6] text-[#242424] rounded-lg p-6 flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-xl text-[#242424] font-semibold font-cirka mb-2">
          {tier.name}
        </h3>
        <p className="text-[#242424] text-sm font-circa">{tier.description}</p>
      </div>

      <div className="mb-6">
        <ToggleButton
          options={[
            { label: "Yearly", value: "yearly" },
            { label: "Biennial", value: "biennial" },
          ]}
          defaultValue={interval}
          onChange={onIntervalChange}
        />
      </div>

      <div className="mb-6">
        <div className="text-3xl font-bold">
          ${calculatePrice().toLocaleString()}
        </div>
        <div className="text-[#242424] text-sm">
          {interval === "yearly" ? "Per year" : "Every two years"}
        </div>
      </div>
      <Link href="/dashboard" passHref>
        <button className="bg-[#F4F5F6] border w-full border-navy text-navy rounded-md py-2 px-4 hover:bg-navy hover:text-white transition-colors mb-6">
          Subscribe
        </button>
      </Link>
      <div className="border-t">
        <h4 className="font-semibold mt-5 text-[#242424] mb-4">Features</h4>
        <p className="font-helvatica text-[#242424] mt-2 font-small mb-4">
          {tier.intro}
        </p>
        <FeaturesList features={tier.features} />
      </div>
    </div>
  );
};
