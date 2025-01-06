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
    <Card className=" bg-white rounded-3xl">
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-cirka text-navy leading-relaxed">
            Hello {userName} welcome to
            <br />
            your Celerey dashboard.
          </h2>
          <div className="relative">
            <Mail className="h-6 w-6 text-gray-400" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
          </div>
        </div>
      </div>

      <div className="space-y-2 p-2 bg-[#FAFBFB]">
        <div className="border-b border-[#AAAAAA] pb-2">
          <div className="text-sm text-gray-500 pl-5  mb-2 font-helvatica">
            Your Risk Attitude
          </div>
          <div className="text-2xl text-navyLight font-cirka pl-5 font-medium">
            {riskAttitude}
          </div>
        </div>

        <div className="border-b border-[#AAAAAA] pb-2">
          <div className="text-sm text-gray-500 pl-5 mb-2 font-helvatica">
            Your Current Net Worth
          </div>
          <div className="text-2xl text-navyLight font-cirka pl-5 font-medium">
            {netWorth.toLocaleString()}
          </div>
        </div>

        <div className="border-b border-[#AAAAAA] pb-2">
          <div className="text-sm text-gray-500 pl-5 mb-2 font-helvatica">
            Your Investment Experience
          </div>
          <div className="text-2xl text-navyLight font-cirka pl-5 font-medium">
            {investmentExperience}
          </div>
        </div>
      </div>

      <div className="pb-2 bg-[#FAFBFB] rounded-b-3xl p-2 space-y-2">
        <div className="flex items-center border-b justify-between border-[#AAAAAA] p-2 ">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center">
              <Image
                src="/assets/consultation.svg"
                alt="Consultation"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-navy font-helvatica text-sm">
              Book a Virtual Consultation
            </span>
          </div>
          <button className="p-2 rounded-full bg-navy flex items-center justify-center">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex items-center border-b justify-between border-[#AAAAAA] p-2">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center">
              <Image
                src="/assets/recommendation.svg"
                alt="Advisor"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-navy font-helvatica text-sm">
              View advisors recommendation
            </span>
          </div>
          <button className="p-2 rounded-full bg-navy flex items-center justify-center">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex items-center  justify-between p-2 ">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl bg flex items-center justify-center p-1">
              <Image
                src="/assets/financialDoc.svg"
                alt="Upload Financial Document"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-navy font-helvatica text-sm">
              Upload financial documents
            </span>
          </div>
          <button className="p-2 rounded-full bg-navy flex items-center justify-center">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      {/* </div> */}
    </Card>
  );
};

export default UserProfile;
