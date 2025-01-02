import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


interface LiabilitiesScreenProps {
  values: {
    mortgages: string;
    loans: string;
    creditCards: string;
    assetFinance: string;
    otherLiabilities: string;
  };
  onChange: (field: keyof LiabilitiesScreenProps['values'], value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const LiabilitiesScreen = ({
  values,
  onChange,
  onBack,
  onContinue,
}: LiabilitiesScreenProps) => {
  const isComplete =
    values.mortgages !== "" &&
    values.loans !== "" &&
    values.creditCards !== "" &&
    values.assetFinance !== "" &&
    values.otherLiabilities !== "";

  const handleInputChange = (field: keyof LiabilitiesScreenProps['values'], value: string) => {
    if (/^\d*$/.test(value)) {
      onChange(field, value);
    }
  };

  return (
    <div className="font-helvetica max-w-xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-cirka">What are your Liabilities?</h1>
        <p className="text-gray-600">Enter your liabilities</p>
      </div>
      <div className="space-y-4 mb-12">
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Mortgages</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.mortgages || ""}
            onChange={(e) => handleInputChange("mortgages", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Loans</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.loans || ""}
            onChange={(e) => handleInputChange("loans", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Credit Cards</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.creditCards || ""}
            onChange={(e) => handleInputChange("creditCards", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Asset Finance</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.assetFinance || ""}
            onChange={(e) => handleInputChange("assetFinance", e.target.value)}
          />
        </div>
        <div className="flex border-b border-gray-300 pb-4 items-center">
          <label className="flex-1">Other Liabilities</label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="flex-1 appearance-none"
            value={values.otherLiabilities || ""}
            onChange={(e) => handleInputChange("otherLiabilities", e.target.value)}
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
