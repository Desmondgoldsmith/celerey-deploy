import { Button } from "@/components/ui/button";
import { Option } from "../../../types";
import { RiskOptionsScreenProps } from "../../../types";
import { OptionCard } from "../../molecules/riskOptionCard";


const OPTIONS: Option[] = [
  {
    id: "very-strong",
    title: "Very Strong Growth",
    description: "Seeking high returns, willing to endure significant losses for potential strong growth.",
  },
  {
    id: "reasonably-strong",
    title: "Reasonably Strong Growth",
    description: "Seeking steady growth, willing to endure losses for long term capital preservation.",
  },
  {
    id: "somwhat-aggressive",
    title: "Somewhat Aggressive",
    description: "Investors willing to take on more risk for higher returns",
  },
  {
    id: "moderate",
    title: "Moderate",
    description: "seeking moderate growth, accepting some risk for potential capital fluctuations",
  },
  {
    id: "slow-and-steady",
    title: "Slow and Steady Growth",
    description: "prioritizing capital preservation over growth, minimizing risk to avoid negative changes",
  },
];

export const RiskToleranceScreen: React.FC<RiskOptionsScreenProps> = ({
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
        Let&apos;s test that theory, shall we? <br /> Which of the following statement best
        describes your risk tolerance?
      </h1>
      <div className="space-y-4 mb-8">
        {OPTIONS.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
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