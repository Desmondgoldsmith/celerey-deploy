// components/molecules/geographicSpread.tsx
import React from "react";
import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Using react-simple-maps instead of react-svg-worldmap for better control
export const GeographicSpread: React.FC = () => {
  // Define the countries we want to highlight
  const highlightedCountries = {
    GBR: "#FF69B4", // UK in pink
    GHA: "#6B4EFF", // Ghana in navy blue
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
        <h2 className="text-xl font-cirka text-navy">Geographic Spread</h2>
        <MoreHorizontal className="h-6 w-6 text-gray-400 cursor-pointer" />
      </div>

      <div className="h-[200px] relative">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 100,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Geographies geography="/world-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    highlightedCountries[geo.properties.ISO_A3] || "#F3F4F6"
                  }
                  stroke="#E5E7EB"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className="flex justify-center space-x-8 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#6B4EFF] mr-2" />
          <span className="text-sm font-helvetica text-gray-600">Ghana</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#FF69B4] mr-2" />
          <span className="text-sm font-helvetica text-gray-600">
            United Kingdom
          </span>
        </div>
      </div>
    </Card>
  );
};
