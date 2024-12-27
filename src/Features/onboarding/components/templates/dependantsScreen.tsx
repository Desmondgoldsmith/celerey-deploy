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

      <div className="w-full max-w-md mx-auto">
        {" "}
        <RadioGroupButton
          options={options}
          value={value.hasDependents}
          onChange={(val) => onChange({ ...value, hasDependents: val })}
          name="dependents"
        />
        {value.hasDependents === "yes" && (
          <div className="mt-3 space-y-3">
            <div
              className={`
                flex items-center justify-between w-full px-4 py-3
                border rounded-lg border-gray-200 hover:border-gray-300
                transition-all
              `}
            >
              <span className="text-base text-gray-900">
                Number of Dependents
              </span>
              <input
                type="number"
                value={value.numberOfDependents || ""}
                onChange={(e) =>
                  onChange({ ...value, numberOfDependents: e.target.value })
                }
                className="w-24 px-3 py-1 text-right border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="0"
              />
            </div>

            <div
              className={`
                flex items-center justify-between w-full px-4 py-3
                border rounded-lg border-gray-200 hover:border-gray-300
                transition-all
              `}
            >
              <span className="text-base text-gray-900">Age of Dependents</span>
              <input
                type="number"
                value={value.ageOfDependents || ""}
                onChange={(e) =>
                  onChange({ ...value, ageOfDependents: e.target.value })
                }
                className="w-24 px-3 py-1 text-right border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="0"
              />
            </div>
          </div>
        )}
        <div className="flex gap-4 mt-8 w-full max-w-md mx-auto">
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button
            onClick={onContinue}
            className="flex-1 bg-navy hover:bg-navyLight text-white"
            disabled={
              !value.hasDependents ||
              (value.hasDependents === "yes" &&
                (!value.numberOfDependents || !value.ageOfDependents))
            }
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
