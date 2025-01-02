import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

interface ExpensesScreenProps {
  values: {
    home: string;
    childcare: string;
    education: string;
    healthcare: string;
    travel: string;
    giving: string;
  };
  onChange: (field: keyof ExpensesScreenProps['values'], value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const ExpensesScreen = ({
  values,
  onChange,
  onBack,
  onContinue,
}: ExpensesScreenProps) => {
  const isComplete =
    values.home !== "" &&
    values.childcare !== "" &&
    values.education !== "" &&
    values.healthcare !== "" &&
    values.travel !== "" &&
    values.giving !== "";

  const handleInputChange = (field: keyof ExpensesScreenProps['values'], value: string) => {
    if (/^\d*$/.test(value)) {
      onChange(field, value);
    }
  };

  return (
    <div className="font-helvetica max-w-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-cirka">What are your Annual Expenses?</h1>
        <p className="text-gray-600">Enter your annual expenses</p>
      </div>
      <div className="space-y-4 mb-12">
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Home</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.home || ""}
            onChange={(e) => handleInputChange("home", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Childcare</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.childcare || ""}
            onChange={(e) => handleInputChange("childcare", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Education</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.education || ""}
            onChange={(e) => handleInputChange("education", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Healthcare</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.healthcare || ""}
            onChange={(e) => handleInputChange("healthcare", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Travel</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.travel || ""}
            onChange={(e) => handleInputChange("travel", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Giving</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.giving || ""}
            onChange={(e) => handleInputChange("giving", e.target.value)}
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
