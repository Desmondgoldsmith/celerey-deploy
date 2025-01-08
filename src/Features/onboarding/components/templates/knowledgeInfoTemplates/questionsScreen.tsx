import * as React from "react";
import { Button } from "@/components/ui/button";
import { OptionCard } from "../../molecules/knowledgeOptionCard";
import { RiskOptionsScreenProps } from "../../../types";

const QUESTIONS = [
  {
    id: "investmentExperience",
    question: "How much knowledge do you have about cash and cash equivalents?",
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

export const SurveyScreen: React.FC<RiskOptionsScreenProps> = ({
  value,
  onChange,
  onBack,
  onContinue,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleOptionSelect = (optionId: string) => {
    onChange(optionId);
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onContinue();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      onBack();
    }
  };

return (
  <div className=" max-w-3xl mx-auto">
    <h1 className="text-4xl text-center font-cirka pb-5 border-b">
      Financial Knowledge and Experience
    </h1>

    <div className="flex gap-4 border-b py-4 mb-4 items-center">
      <h1 className="flex-1 font-helvetica">{currentQuestion.question}</h1>

      
      <div className="flex-1 flex gap-4 items-end">
        {currentQuestion.options.map((option) => (
          <OptionCard
            key={option.id}
            question={option.value}
            selected={value === option.id}
            onClick={() => handleOptionSelect(option.id)}
          />
        ))}
      </div>
    </div>

    <div className="flex gap-4">
      <Button variant="outline" onClick={handlePrevious} className="flex-1">
        {currentQuestionIndex > 0 ? "Previous" : "Back"}
      </Button>
      <Button
        onClick={handleNext}
        className="flex-1 bg-navy hover:bg-navyLight text-white"
        disabled={!value}
      >
        {currentQuestionIndex < QUESTIONS.length - 1 ? "Next" : "Continue"}
      </Button>
    </div>
  </div>
);

};
