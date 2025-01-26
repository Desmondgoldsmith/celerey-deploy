"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import UserProfile from "../molecules/userProfile";
import { Advisor } from "../../types";

interface AdvisorDetailsTemplateProps {
  advisor: Advisor;
  userName: string;
  netWorth: number;
  riskAttitude: string;
  investmentExperience: string;
}

export const AdvisorDetailsTemplate: React.FC<AdvisorDetailsTemplateProps> = ({
  advisor,
  userName,
  netWorth,
  riskAttitude,
  investmentExperience,
}) => {
  const router = useRouter();
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Mobile First: Stack UserProfile and Advisor Details */}
          <div className="lg:col-span-4 w-full">
            <UserProfile
              userName={userName}
              netWorth={netWorth}
              riskAttitude={riskAttitude}
              investmentExperience={investmentExperience}
              // className="mb-4 sm:mb-6"
            />
          </div>

          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl p-4 sm:p-8">
              <button
                onClick={() => router.back()}
                className="flex items-center text-gray-600 hover:text-navy mb-4 sm:mb-0"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to advisors
              </button>

              <div className="bg-white rounded-lg p-4 sm:p-6">
                {/* Responsive Image */}
                <div className="relative h-48 sm:h-64 md:h-80 mb-4 sm:mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Adaptive Typography */}
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-xl sm:text-2xl font-cirka text-navy mb-2">
                    {advisor.name}
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {advisor.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    {advisor.bio}
                  </p>
                </div>

                {/* Responsive Specialties and Strengths Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
                  <div>
                    <h2 className="text-base sm:text-lg font-cirka text-navy mb-4">
                      {advisor.name}&apos;s Specialties in:
                    </h2>
                    <ul className="space-y-2">
                      {advisor.specialties.map((specialty, index) => (
                        <li
                          key={index}
                          className="text-sm sm:text-base text-gray-700"
                        >
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-base sm:text-lg font-cirka text-navy mb-4">
                      {advisor.name}&apos;s Strengths:
                    </h2>
                    <ul className="space-y-2">
                      {advisor.strengths.map((strength, index) => (
                        <li
                          key={index}
                          className="text-sm sm:text-base text-gray-700"
                        >
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Responsive Calendar Button and Integration */}
                <div className="mt-4 sm:mt-6">
                  <button
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full flex items-center justify-center bg-navy hover:bg-navy/90 text-white rounded-full py-2 sm:py-3 text-xs sm:text-sm font-medium"
                  >
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    {showCalendar ? "Hide Calendar" : "Book an Appointment"}
                  </button>

                  {showCalendar && (
                    <div className="mt-4 sm:mt-6 w-full h-[300px] sm:h-[450px] md:h-[600px] border rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={advisor.googleCalendarUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title={`Book Appointment with ${advisor.name}`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
