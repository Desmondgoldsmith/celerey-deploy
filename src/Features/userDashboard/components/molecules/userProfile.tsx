// components/molecules/userProfile.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { MessageCircle, ChevronRight } from "lucide-react";
import Image from "next/image";

interface UserProfileProps {
  userName?: string;
  netWorth?: number;
  riskAttitude?: string;
  investmentExperience?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userName = "Jude",
  netWorth = 103550.0,
  riskAttitude = "Somewhat Aggressive",
  investmentExperience = "Advanced",
}) => {
  const actions = [
    {
      title: "Book a Virtual Consultation",
      subtitle: "with an adviser",
      icon: "/assets/consultation.svg",
      link: "/consultation",
    },
    {
      title: "View advisors",
      subtitle: "recommendation",
      icon: "/assets/recommendation.svg",
      link: "/advisors",
    },
    {
      title: "Upload financial",
      subtitle: "documents",
      icon: "/assets/financialDoc.svg",
      link: "/documents",
    },
  ];

  return (
    <Card className="p-6">
      {/* Header with Message Icon */}
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-2xl font-cirka">
          Hello {userName} welcome to
          <br />
          your Celerey dashboard.
        </h2>
        <div className="relative">
          <MessageCircle className="h-6 w-6 text-gray-400" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
        </div>
      </div>

      {/* User Stats with Proper Borders */}
      <div className="space-y-6 border-y border-gray-200 py-6">
        <div>
          <p className="text-sm font-helvetica text-gray-600">Risk Attitude</p>
          <p className="text-xl font-helvetica text-purple-600">
            {riskAttitude}
          </p>
        </div>
        <div>
          <p className="text-sm font-helvetica text-gray-600">Net Worth</p>
          <p className="text-xl font-helvetica text-purple-600">
            ${netWorth.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div>
          <p className="text-sm font-helvetica text-gray-600">
            Investment Experience
          </p>
          <p className="text-xl font-helvetica text-purple-600">
            {investmentExperience}
          </p>
        </div>
      </div>

      {/* Action Items with Chevron */}
      <div className="space-y-4 mt-6">
        {actions.map((action) => (
          <div
            key={action.title}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-full gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={action.icon}
                  alt={action.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <p className="font-helvetica text-sm text-gray-900">
                  {action.title}
                </p>
                <p className="font-helvetica text-sm text-gray-500">
                  {action.subtitle}
                </p>
              </div>
            </div>
            <div className="rounded-full bg-navy text-white p-2">
              <ChevronRight className="h-5 w-5 text-white" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
