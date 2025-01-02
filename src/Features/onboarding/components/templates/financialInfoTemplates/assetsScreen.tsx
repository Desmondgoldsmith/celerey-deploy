import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

interface AssetsScreenProps {
  values: {
    realEstate: string;
    cash: string;
    publicSecurities: string;
    privateSecurities: string;
  };
  onChange: (field: keyof AssetsScreenProps["values"], value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const AssetsScreen = ({
  values,
  onChange,
  onBack,
  onContinue,
}: AssetsScreenProps) => {
  const isComplete =
    values.realEstate !== "" &&
    values.cash !== "" &&
    values.publicSecurities !== "" &&
    values.privateSecurities !== "";

  const handleInputChange = (
    field: keyof AssetsScreenProps["values"],
    value: string
  ) => {
    if (/^\d*$/.test(value)) {
      onChange(field, value);
    }
  };

  return (
    <div className="font-helvetica max-w-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-cirka mb-4">What assets do you have?</h1>
        <p className="text-gray-600">Enter your assets</p>
      </div>
      <div className="space-y-4 mb-12">
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Real Estate</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.realEstate || ""}
            onChange={(e) => handleInputChange("realEstate", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Cash</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.cash || ""}
            onChange={(e) => handleInputChange("cash", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Public Securities</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.publicSecurities || ""}
            onChange={(e) =>
              handleInputChange("publicSecurities", e.target.value)
            }
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Private Securities</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.privateSecurities || ""}
            onChange={(e) =>
              handleInputChange("privateSecurities", e.target.value)
            }
          />
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button
          onClick={onContinue}
          className="flex-1 bg-navy hover:bg-navyLight text-white"
          disabled={!isComplete}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
