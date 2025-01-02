import { useState } from "react";
import { PricingCard } from "../molecules/pricingCard";
import { SubscriptionTier } from "../../types";

export const SubscriptionTemplate = () => {
  // @ts-ignore
  const [interval, setInterval] = useState<"monthly" | "yearly">("monthly");

  const subscriptionTiers: SubscriptionTier[] = [
    {
      name: "Standard",
      price: 25,
      interval: "monthly",
      description:
        "Ideal for emerging professionals focused on setting goals and financial literacy.",
      intro:
        "All of Celerey Lite's features. Omnichannel – mobile app & web app",
      features: [
        "WhatsApp only channel - Seamless WhatsApp Channel",
        "Conversational flow customization - Tailored Conversational Flows",
        "Risk profile categorization",
        "Basic Robo-advisory on financial health (no visualization) - Foundational Financial Health",
        "Robo-Advisory",
        "Basic recommended asset allocation (no visualization) - Foundational Asset Allocation Recommendation",
      ],
    },
    {
      name: "Pro",
      price: 125,
      interval: "monthly",
      description:
        "Ideal for emerging professionals focused on setting goals and financial literacy.",
      intro: "All of Celerey Standard Features Premium Access includes:",
      features: [
        "Advanced AI features such as social benchmarking",
        "45-min professional advisor reviews (virtual) -2x per year",
        "Tax optimization session with tax advisor - 1x per year",
      ],
    },
    {
      name: "Elite",
      price: 420,
      interval: "monthly",
      description:
        "Ideal for emerging professionals focused on setting goals and financial literacy.",
      intro: "All of Celerey Pro's features Exclusive access includes:",
      features: [
        "Advanced interactive asset allocation visualization",
        "Robo-assisted guidance on the portfolio (such as swap in/swap out)",
        "Budgeting tools and other financial tools (nft vs buy, etc)",
        "15-min professional advisor consultation (Virtual) 4x a year inclusive",
        "Educational resources on personal finance",
      ],
    },
  ];

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
          <PricingCard key={tier.name} tier={tier} interval={interval} />
        ))}
      </div>
    </div>
  );
};
