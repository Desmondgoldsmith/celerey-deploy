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
    question:
      "How much investing experience do you have with cash and cash equivalents?",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "publicSharesKnowledge",
    question:
      "How much knowledge do you have about publicly traded company shares?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "publicSharesExperience",
    question:
      "How much investing experience do you have with publicly traded shares?",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
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
  {
    id: "investmentGradeBondsExperience",
    question:
      "How much investing expereince do you have with investment grade bonds?",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "nonInvestmentGradeBondsKnowledge",
    question:
      "How much knowledge do you have about non-investment grade bonds?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: " nonInvestmentGradeBondsExperience",
    question:
      "How much investing expereince do you have with non-investment grade bonds?",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "collectiveInvestmentsInstrumentsKnowledge",
    question:
      "How much knowledge do you have about collective investment instruments, such as funds?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "collectiveInvestmentsInstrumentsExperience",
    question:
      "How much experience do you have with collective investment instruments, such as funds?",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "derivativesKnowledge",
    question:
      "How much knowledge do you have about derivatives, such as options, futures, and swaps?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "derivativesExperience",
    question:
      "How much investing experience do a have with derivatives, such as options, futures, and swaps?",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "forexKnowledge",
    question:
      "How much knowledge do you have about foreign exchange related (FOREX) investments?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "commoditiesKnowledge",
    question:
      "How much knowledge do you have about commodities (oil, metals, agricultural, etc.)?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "commoditiesExperience",
    question:
      "How much investing experience do you have with commodities (oil, metals, agricultural, etc.)",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "hybridInvestmentsKnowledge",
    question:
      "How much knowledge do you have about structured products (hybrid investments)?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "privateMarketInstrumentsKnowledge",
    question:
      " How much knowledge do you have about private market instruments (venture capital, private equity, hedge funds, etc.)",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "privateMarketInstrumentsExperience",
    question:
      "How much investing experience do you have with private market instruments (venture capital, private equity, hedge funds, etc.",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "realEstateKnowledge",
    question:
      "How much knowledge do you have about real estate (residential, commercial, industrial, REITS, etc.)?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "realEstateExperience",
    question:
      "How much investing experience do you have with real estate (residential, commercial, industrial, REITS, etc.)?",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "altAssetsKnowledge",
    question:
      "How much knowledge do you have about alternative assets, such as crypto, fine art, etc.?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "leveragedInstrumentsKnowledge",
    question:
      "How much knowledge do you have about leveraged investments (such as Lombard lending, mortgages, etc.)?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
  {
    id: "leveragedInstrumentsExperience",
    question:
      "How much investing experience do you have with leveraged investments (such as Lombard lending, mortgages, etc.)?",
    options: [
      { id: "none", value: "None" },
      { id: "1-3", value: "1 to 3 years" },
      { id: "over3Years", value: "More Than 3 Years" },
    ],
  },
  {
    id: "privateCreditKnowledge",
    question:
      "How much knowledge do you have about private credit or commercial paper?",
    options: [
      { id: "none", value: "None" },
      { id: "basic", value: "Basic" },
      { id: "informed", value: "Informed" },
    ],
  },
];
const QUESTIONS_PER_PAGE = 5;

export const SurveyScreen: React.FC<SurveyScreenProps> = ({
  value,
  onChange,
  onBack,
  onContinue,
}) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [allAnswered, setAllAnswered] = React.useState(false);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    onChange({ [questionId]: optionId });
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * QUESTIONS_PER_PAGE < QUESTIONS.length) {
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

  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const endIndex = startIndex + QUESTIONS_PER_PAGE;
  const currentQuestions = QUESTIONS.slice(startIndex, endIndex);

React.useEffect(() => {
  const allQuestionsAnswered = currentQuestions.every(
    (question) => value[question.id] !== undefined
  );
  setAllAnswered(allQuestionsAnswered);
}, [currentQuestions, value]);
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl text-center font-cirka pb-5 border-b">
        Financial Knowledge and Experience
      </h1>

      {currentQuestions.map((question) => (
        <div
          key={question.id}
          className="flex flex-col md:flex-row gap-4 border-b py-3 mb-3 items-center"
        >
          <h2 className="flex-1 font-helvetica text-sm">{question.question}</h2>
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
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          className="flex-1 bg-navy hover:bg-navyLight text-white"
          disabled={!allAnswered}
        >
          {endIndex < QUESTIONS.length ? "Next" : "Continue"}
        </Button>
      </div>
    </div>
  );
};