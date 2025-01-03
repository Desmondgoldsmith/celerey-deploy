import React from "react";
import { Card } from "@/components/ui/card";

export const GeographicSpread: React.FC = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-cirka text-navy mb-4">Geographic Spread</h2>
      <div className="relative aspect-[16/9]">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="0.5"
        >
          {/* World Map Path - Simplified for brevity */}
          <path d="M150,100 L850,100 L850,400 L150,400 Z" />

          {/* UK */}
          <path
            d="M470,120 L480,130 L475,140 L465,135 Z"
            fill="#FF69B4"
            stroke="none"
          />

          {/* Ghana */}
          <path
            d="M460,250 L470,250 L470,260 L460,260 Z"
            fill="#1a237e"
            stroke="none"
          />

          {/* Location Markers */}
          <circle cx="475" cy="130" r="3" fill="#FF69B4" />
          <circle cx="465" cy="255" r="3" fill="#1a237e" />
        </svg>
      </div>

      <div className="mt-4 flex justify-center space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#FF69B4] mr-2" />
          <span className="text-sm font-helvetica">United Kingdom</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-navy mr-2" />
          <span className="text-sm font-helvetica">Ghana</span>
        </div>
      </div>
    </Card>
  );
};
