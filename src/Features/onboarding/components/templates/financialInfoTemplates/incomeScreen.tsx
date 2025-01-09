import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface IncomeScreenProps {
  values: {
    rentalIncome: string;
    dividends: string;
    interestIncome: string;
    otherIncome: string;
  };
  onChange: (field: keyof IncomeScreenProps["values"], value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const IncomeScreen = ({
  values,
  onChange,
  onBack,
  onContinue,
}: IncomeScreenProps) => {
  const isComplete =
    values.rentalIncome !== "" &&
    values.dividends !== "" &&
    values.interestIncome !== "" &&
    values.otherIncome !== "";

  const handleInputChange = (
    field: keyof IncomeScreenProps["values"],
    value: string
  ) => {
    if (/^\d*$/.test(value)) {
      onChange(field, value);
    }
  };

  return (
    <div className="font-helvetica max-w-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-cirka mb-4">What&apos;s your annual passive income</h1>
        <p className="text-gray-600">Enter any annual passive income</p>
      </div>
      <div className="space-y-4 mb-12">
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Rental Income</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.rentalIncome || ""}
            onChange={(e) => handleInputChange("rentalIncome", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Dividends</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.dividends || ""}
            onChange={(e) => handleInputChange("dividends", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Interest Income</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.interestIncome || ""}
            onChange={(e) =>
              handleInputChange("interestIncome", e.target.value)
            }
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Other Income</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.otherIncome || ""}
            onChange={(e) => handleInputChange("otherIncome", e.target.value)}
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
