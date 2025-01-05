import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Mail, ChevronRight } from "lucide-react";

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
  return (
    <Card className="p-6 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-cirka text-navy leading-relaxed">
          Hello {userName} welcome to
          <br />
          your Celerey dashboard.
        </h2>
        <Mail className="h-6 w-6 text-navyLight" />
      </div>

      <div className="space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <div className="text-sm font-helvatica text-gray-600 mb-2">
            Your Risk Attitude
          </div>
          <div className="text-lg text-navyLight font-cirka font-medium">
            {riskAttitude}
          </div>
        </div>

        <div className="border-b border-gray-100 pb-4">
          <div className="text-sm font-helvatica text-gray-600 mb-2">
            Your Current Net Worth
          </div>
          <div className="text-lg text-navyLight font-cirka font-medium">
            ${netWorth.toLocaleString()}
          </div>
        </div>

        <div className="border-b border-gray-100 pb-4">
          <div className="text-sm text-gray-600 mb-2">
            Your Investment Experience
          </div>
          <div className="text-lg text-navyLight font-cirka font-medium">
            {investmentExperience}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <div className="space-y-3 -mx-6 px-6">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/assets/consultation.svg"
                    alt="Consultation"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-navy font-medium">
                  Book a Virtual Consultation
                </span>
              </div>
              <button className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/assets/recommendation.svg"
                    alt="Advisor"
                    width={24}
                    height={24}
                  />
                </div>
                <span className="text-navy font-medium">
                  View advisors recommendation
                </span>
              </div>
              <button className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/assets/financialDoc.svg"
                    alt="Upload"
                    width={50}
                    height={50}
                  />
                </div>
                <span className="text-navy font-medium">
                  Upload financial documents
                </span>
              </div>
              <button className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
