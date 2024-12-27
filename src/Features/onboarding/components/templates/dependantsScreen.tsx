import { Button } from "@/components/ui/button";
import RadioGroupButton from "../molecules/radioGroupButton";
import { DependentsScreenProps } from "../../types";

export const DependentsScreen: React.FC<DependentsScreenProps> = ({
  value,
  onChange,
  onBack,
  onContinue,
}) => {
  const options = [
    { value: "no", label: "No Dependents" },
    { value: "yes", label: "Yes" },
  ];

  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-12">Do you have any dependents</h1>

      <RadioGroupButton
        options={options}
        value={value}
        onChange={onChange}
        name="dependents"
      />

      <div className="flex gap-4 mt-8">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button
          onClick={onContinue}
          className="flex-1 bg-navy hover:bg-navyLight text-white"
          disabled={!value}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
