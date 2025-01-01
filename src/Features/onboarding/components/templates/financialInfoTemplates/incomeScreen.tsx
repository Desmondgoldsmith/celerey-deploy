import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
interface IncomeScreenProps {
  values: {
    rentalIncome: number;
    dividends: number;
    interestIncome: number;
    otherIncome: number;
  };
  onChange: (field: keyof IncomeScreenProps['values'], value: number) => void;
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
    values.rentalIncome >= 0 &&
    values.dividends >= 0 &&
    values.interestIncome >= 0 &&
    values.otherIncome >= 0;

  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-12">Your Passive Income</h1>

      <div className="space-y-4 mb-12">
        <Input
          type="number"
          placeholder="Rental Income"
          value={values.rentalIncome}
          onChange={(e) => onChange("rentalIncome", parseFloat(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Dividends"
          value={values.dividends}
          onChange={(e) => onChange("dividends", parseFloat(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Interest Income"
          value={values.interestIncome}
          onChange={(e) =>
            onChange("interestIncome", parseFloat(e.target.value))
          }
        />
        <Input
          type="number"
          placeholder="Other Income"
          value={values.otherIncome}
          onChange={(e) => onChange("otherIncome", parseFloat(e.target.value))}
        />
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
