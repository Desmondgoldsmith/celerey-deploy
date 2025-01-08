import * as React from "react";
import { Button } from "@/components/ui/button";
import { OptionCard } from "../../molecules/knowledgeOptionCard";
import { KnowledgeInfoSchema } from "../../../schema";

interface SurveyScreenProps {
  value: KnowledgeInfoSchema;
  onChange: (updates: Partial<KnowledgeInfoSchema>) => void;
  onBack: () => void;
  onContinue: () => void;
}

const QUESTIONS = [
  {
    id: "cashKnowledge",
    question: "How much knowledge do you have about cash and cash equivalents?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "investingExperience",
    question: "How much experience do you have with investing?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "publicSharesKnowledge",
    question: "How much knowledge do you have about public shares?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "publicSharesExperience",
    question: "How much experience do you have with public shares?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "investmentGradeBondsKnowledge",
    question: "How much knowledge do you have about investment grade bonds?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
];

export const SurveyScreen: React.FC<SurveyScreenProps> = ({
  value,
  onChange,
  onBack,
  onContinue,
}) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const questionsPerPage = 5;

  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = QUESTIONS.slice(startIndex, endIndex);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    onChange({ [questionId]: optionId });
  };

  const handleNextPage = () => {
    if (endIndex < QUESTIONS.length) {
      setCurrentPage(currentPage + 1);
    } else {
      onContinue();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      onBack();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl text-center font-cirka pb-5 border-b">
        Financial Knowledge and Experience
      </h1>

      {currentQuestions.map((question) => (
        <div
          key={question.id}
          className="flex gap-4 border-b py-3 mb-3 items-center"
        >
          <h2 className="flex-1 font-helvetica">{question.question}</h2>
          <div className="flex-1 flex gap-4 items-end">
            {question.options.map((option) => (
              <OptionCard
                key={option.id}
                question={option.value}
                selected={value[question.id] === option.id}
                onClick={() => handleOptionSelect(question.id, option.id)}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-4 max-w-md mx-auto">
        <Button
          variant="outline"
          onClick={handlePreviousPage}
          className="flex-1"
        >
          {currentPage > 0 ? "Previous" : "Back"}
        </Button>
        <Button
          onClick={handleNextPage}
          className="flex-1 bg-navy hover:bg-navyLight text-white"
        >
          {endIndex < QUESTIONS.length ? "Next" : "Continue"}
        </Button>
      </div>
    </div>
  );
};
