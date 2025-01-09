import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GoalsScreenProps } from "@/Features/onboarding/types";

const CURRENCY_OPTIONS = [
  "US Dollar (USD)",
  "Euro (EUR)",
  "British Pound (GBP)",
  "Japanese Yen (JPY)",
  "Canadian Dollar (CAD)",
  "Australian Dollar (AUD)",
  "Swiss Franc (CHF)",
  "Chinese Yuan (CNY)",
  "Indian Rupee (INR)",
  "South African Rand (ZAR)",
  "Nigerian Naira (NGN)",
  "Ghanaian Cedi (GHS)",
  "Kenyan Shilling (KES)",
  "Egyptian Pound (EGP)",
  "Botswana Pula (BWP)",
  "Moroccan Dirham (MAD)",
  "Ugandan Shilling (UGX)",
  "Tanzanian Shilling (TZS)",
  "Zimbabwean Dollar (ZWL)",
  "Brazilian Real (BRL)",
  // Add more Currencies if needed...
];

export const GoalsScreen: React.FC<GoalsScreenProps> = ({
  retirementAge,
  retirementIncome,
  goalsCurrency,
  onChange,
  onBack,
  onContinue,
}) => {
  const isComplete =
    retirementAge !== "" && retirementIncome !== "" && goalsCurrency !== "";

  const handleInputChange = (field: string, value: string) => {
    if (/^\d*$/.test(value)) {
      onChange(field, value);
    }
  };

  return (
    <div className="font-helvetica max-w-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-cirka mb-4">Set Your Goals</h1>
        <p className="text-gray-600">
          Enter your retirement goals and currency
        </p>
      </div>
      <div className="space-y-4 mb-12">
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">When would you like to retire</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={retirementAge || ""}
            onChange={(e) => handleInputChange("retirementAge", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">What is your desired annual income</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={retirementIncome || ""}
            onChange={(e) =>
              handleInputChange("retirementIncome", e.target.value)
            }
          />
        </div>
        <div className="flex border-gray-300 pb-4 items-center">
          <Select
            value={goalsCurrency}
            onValueChange={(val) => onChange("goalsCurrency", val)}
          >
            <SelectTrigger className="w-full text-left h-12">
              <SelectValue placeholder="Select your income currency" />
            </SelectTrigger>
            <SelectContent>
              {CURRENCY_OPTIONS.map((goalsCurrency) => (
                <SelectItem
                  key={goalsCurrency}
                  value={goalsCurrency.toLowerCase()}
                  className="cursor-pointer hover:bg-purple-50"
                >
                  {goalsCurrency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
