import { Button } from "@/components/ui/button";
import { Option } from "../../../types";
import { RiskOptionsScreenProps } from "../../../types";
import { OptionCard } from "../../molecules/knowledgeOptionCard";



const QUESTIONS = [
  {
    id: "investmentExperience",
    question: "What is your investment experience?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "riskTolerance",
    question: "How much risk are you comfortable with in your investments?",
    options: [
      { id: "low", value: "Low" },
      { id: "medium", value: "Medium" },
      { id: "high", value: "High" },
    ],
  },
  {
    id: "investmentGoals",
    question: "What is your primary investment goal?",
  options: [
      { id: "growth", value: "Growth" },
      { id: "income", value: "Income" },
      { id: "stability", value: "Stability" },
    ],
  },
  {
    id: "marketKnowledge",
    question: "How familiar are you with financial markets?",
    options: [
      { id: "novice", value: "Novice" },
      { id: "intermediate", value: "Intermediate" },
      { id: "expert", value: "Expert" },
    ],
  },
  {
    id: "investmentHorizon",
    question: "What is your typical investment horizon?",
    options: [
      { id: "short_term", value: "Short-term (1-3 years)" },
      { id: "medium_term", value: "Medium-term (3-10 years)" },
      { id: "long_term", value: "Long-term (10+ years)" },
    ],
  },
];





const OPTIONS: Option[] = [
  {
    id: "increase",
    title: "",
    description: "Increase some positions",
  },
  {
    id: "maintain",
    title: "",
    description: "Maintain my positions",
  },
  {
    id: "decrease",
    title: "",
    description: "Decrease my positions",
  },
  {
    id: "sell",
    title: "",
    description: "sell everything",
  },
];

export const SurveyScreen: React.FC<RiskOptionsScreenProps> = ({
  value,
  onChange,
  onBack,
  onContinue,
}) => {
  const handleOptionSelect = (optionId: string) => {
    onChange(optionId);
  };

  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-4">
        How would you react to sharp declines in assets that you have invested
        in?
      </h1>
      <div className="space-y-4 mb-8">
        {OPTIONS.map((option) => (
          <OptionCard
            key={option.id}
            question={option.title}
            selected={value === option.id}
            onClick={() => handleOptionSelect(option.id)}
          />
        ))}
      </div>

      <div className="flex gap-4">
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
);
