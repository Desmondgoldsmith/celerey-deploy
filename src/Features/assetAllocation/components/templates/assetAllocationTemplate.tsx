"use client";

import React, { Suspense } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { AssetAllocationProps } from "../../types";
import { riskCategories } from "../../constants";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

// Dynamically import Chart component
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => (
    <div className="h-20 w-20 animate-pulse bg-gray-100 rounded-full" />
  ),
});

const RiskChart: React.FC<{ value: number; color: string; label: string }> = ({
  value,
  color,
  label,
}) => {
  const chartState = {
    series: [value],
    options: {
      chart: {
        type: "radialBar",
        height: 80,
        width: 80,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            margin: 0,
            size: "55%",
          },
          track: {
            background:
              color === "#4CAF50"
                ? "#E8F5E9"
                : color === "#FFA726"
                ? "#FFF3E0"
                : "#FFEBEE",
            strokeWidth: "100%",
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: "14px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              color: undefined,
              offsetY: 5,
              formatter: function (val: number) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "solid",
        colors: [color],
      },
      stroke: {
        lineCap: "round",
      },
    },
  };

  return (
    <div className="flex-1 flex flex-col items-center">
      <Suspense
        fallback={
          <div className="h-20 w-20 animate-pulse bg-gray-100 rounded-full" />
        }
      >
        <div className="w-20 h-20">
          <Chart
            // @ts-expect-error - ApexCharts types conflict
            options={chartState.options}
            series={chartState.series}
            type="radialBar"
            height={80}
            width={80}
          />
        </div>
      </Suspense>
      <p className="mt-1 text-sm text-center font-helvetica">{label}</p>
    </div>
  );
};

const AssetAllocationTemplate: React.FC<AssetAllocationProps> = ({
  userName,
  riskAttitude,
  netWorth,
  investmentExperience,
  riskAllocation,
}) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - User Info */}
          <div className="lg:col-span-4">
            <Card className="bg-white rounded-3xl">
              {/* User Header Section */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-cirka text-navy leading-relaxed">
                    Hello {userName} welcome to
                    <br />
                    your Celerey dashboard.
                  </h2>
                  <div></div>
                </div>
              </div>

              {/* User Information Section */}
              <div className="space-y-2 p-2 bg-[#FAFBFB]">
                <div className="border-b border-[#AAAAAA] pb-2">
                  <div className="text-sm text-gray-500 pl-5 mb-2 font-helvatica">
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
                    ${netWorth.toLocaleString()}
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

              {/* Risk Allocation and Subscription Section */}
              <div className="p-4 bg-[#FAFBFB] rounded-b-3xl">
                <div className="relative pt-2 mb-4">
                  <div className="absolute top-4 right-0">
                    <button className="p-2">
                      <MoreHorizontal className="h-6 w-6 text-gray-400" />
                    </button>
                  </div>

                  <h3 className="text-sm font-helvetica text-gray-600 mb-6">
                    Risk Allocation
                  </h3>

                  <div className="flex items-center justify-between space-x-4">
                    <RiskChart
                      value={riskAllocation.low}
                      color="#4CAF50"
                      label="Low"
                    />
                    <RiskChart
                      value={riskAllocation.medium}
                      color="#FFA726"
                      label="Medium"
                    />
                    <RiskChart
                      value={riskAllocation.high}
                      color="#EF5350"
                      label="High"
                    />
                  </div>
                </div>

                <Link href="/subscriptions" passHref>
                  <button
                    className="w-full bg-navy text-white mt-3 py-3 px-6 rounded-lg 
                             hover:bg-navyLight transition-all duration-200
                             font-helvetica flex items-center justify-center space-x-2"
                  >
                    <span>View Subscription Plans</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Right Column - Risk Categories */}
          <div className="lg:col-span-8">
            <p className="font-helvetica text-gray-600 mb-6">
              Based on your financial knowledge and experience, risk appetite,
              net worth, and <br />
              age, here is the recommended asset allocation for your profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(riskCategories).map(([risk, investments]) => (
                <Card key={risk} className="h-full bg-white shadow-sm">
                  <CardHeader className="p-6">
                    <h3 className="text-lg font-cirka text-center items-center capitalize">
                      {risk} Risk
                    </h3>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="mb-6">
                      <div className="h-32 w-full rounded-lg flex items-center justify-center">
                        <Image
                          src={`/assets/${risk}risk.svg`}
                          alt={`${risk} Risk`}
                          width={160}
                          height={160}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      {investments.map((investment, index) => (
                        <div
                          key={index}
                          className="pb-3 border-b last:border-b-0 font-helvetica text-xs text-gray-600"
                        >
                          {investment}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetAllocationTemplate;
