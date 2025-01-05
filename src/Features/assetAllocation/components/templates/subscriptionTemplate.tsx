import { useState } from "react";
import { PricingCard } from "../molecules/pricingCard";
import { subscriptionTiers } from "../../constants";

export const SubscriptionTemplate = () => {
  const [interval, setInterval] = useState<"yearly" | "biennial">("yearly");

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-cirka mb-4">
          Everyone deserves access to the best
          <br /> financial planning tools and advice
        </h1>
        <p className="text-gray-600 text-sm font-helvetica max-w-3xl mx-auto">
          Whether you&apos;re a beginner just starting out, a seasoned investor,
          or a high-net-worth individual with complex <br /> needs, we have a
          plan tailored just for you. Our subscription tiers are designed to
          provide you with the <br /> guidance, tools, and insights necessary to
          take control of your financial future and build lasting wealth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {subscriptionTiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            interval={interval}
            onIntervalChange={setInterval}
          />
        ))}
      </div>
    </div>
  );
};
