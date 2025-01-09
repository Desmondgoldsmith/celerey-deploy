import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PaginatedQuestionsProps {
  questions: { id: string; question: string; answer: string }[];
  onChange: (id: string, answer: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

const QUESTIONS_PER_PAGE = 5;

export const PaginatedQuestions: React.FC<PaginatedQuestionsProps> = ({
  questions,
  onChange,
  onBack,
  onContinue,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const endIndex = startIndex + QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, endIndex);

  return (
    <div className="text-center max-w-xl mx-auto">
      {currentQuestions.map((q) => (
        <div key={q.id} className="mb-4">
          <h3 className="text-lg font-semibold">{q.question}</h3>
          <input
            type="text"
            value={q.answer}
            onChange={(e) => onChange(q.id, e.target.value)}
            className="w-full border border-gray-300 rounded p-2 mt-2"
          />
        </div>
      ))}
      <div className="flex gap-4 mt-8">
        {currentPage > 0 && (
          <Button variant="outline" onClick={handlePreviousPage} className="flex-1">
            Previous
          </Button>
        )}
        {currentPage < 1 ? (
          <Button variant="outline" onClick={onBack} className="flex-1">
            Back
          </Button>
        ) : (
          <Button onClick={onContinue} className="flex-1 bg-navy hover:bg-navyLight text-white">
            Continue
          </Button>
        )}
        {endIndex < questions.length ? (
          <Button onClick={handleNextPage} className="flex-1 bg-navy hover:bg-navyLight text-white">
            Next
          </Button>
        ) : (
          <Button onClick={onContinue} className="flex-1 bg-navy hover:bg-navyLight text-white">
            Continue
          </Button>
        )}
      </div>
    </div>
  );
};



