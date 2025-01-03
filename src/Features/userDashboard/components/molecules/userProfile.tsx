import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface UserProfileProps {
  userName: string;
  netWorth: number;
  riskAttitude: string;
  investmentExperience: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userName,
  netWorth,
  riskAttitude,
  investmentExperience,
}) => {
  const actions = [
    {
      title: "Book a consultation call",
      subtitle: "with an adviser",
      icon: "/assets/consultation.svg",
      link: "/consultation",
    },
    {
      title: "View advisors",
      subtitle: "recommendation",
      icon: "/assets/advisors.svg",
      link: "/advisors",
    },
    {
      title: "Upload financial",
      subtitle: "documents",
      icon: "/assets/upload.svg",
      link: "/documents",
    },
  ];

  return (
    <Card className="bg-white shadow-sm">
      <div className="p-6 space-y-6">
        {/* User Welcome */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-cirka">
            Hello {userName} welcome to <br />
            your Celerey dashboard.
          </h2>
          <button className="p-1">
            <MoreHorizontal className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        {/* User Stats */}
        <div className="space-y-6">
          <div className="border-t border-b py-3">
            <p className="text-sm font-helvetica text-gray-600">
              Risk Attitude
            </p>
            <p className="text-xl font-helvetica text-navyLight">
              {riskAttitude}
            </p>
          </div>

          <div className="border-b pb-3">
            <p className="text-sm font-helvetica text-gray-600">Net Worth</p>
            <p className="text-xl font-helvetica text-navyLight">
              ${netWorth.toLocaleString()}
            </p>
          </div>

          <div className="border-b pb-3">
            <p className="text-sm font-helvetica text-gray-600">
              Investment Experience
            </p>
            <p className="text-xl font-helvetica text-navyLight">
              {investmentExperience}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {actions.map((action) => (
            <Link
              key={action.title}
              href={action.link}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12">
                <Image
                  src={action.icon}
                  alt={action.title}
                  width={48}
                  height={48}
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
            </Link>
          ))}
        </div>

        {/* Subscription Button */}
        <Link
          href="/subscriptions"
          className="block w-full bg-navy text-white py-3 px-6 rounded-lg
                   hover:bg-navyLight transition-all duration-200
                   font-helvetica text-center"
        >
          View Subscription Plans
        </Link>
      </div>
    </Card>
  );
};
