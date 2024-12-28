import { Button } from "@/components/ui/button";
import { DateOfBirthScreenProps } from "@/Features/onboarding/types";
import { useState } from "react";

export const DateOfBirthScreen = ({
  value,
  onChange,
  onBack,
  onContinue,
}: DateOfBirthScreenProps) => {
  const [date, setDate] = useState({
    day1: "",
    day2: "",
    month1: "",
    month2: "",
    year1: "",
    year2: "",
    year3: "",
    year4: "",
  });

  const handleInputChange = (field: keyof typeof date, val: string) => {
    if (!/^\d{0,1}$/.test(val)) return;

    const newDate = { ...date, [field]: val };
    setDate(newDate);

    const day = `${newDate.day1}${newDate.day2}`;
    const month = `${newDate.month1}${newDate.month2}`;
    const year = `${newDate.year1}${newDate.year2}${newDate.year3}${newDate.year4}`;

    if (day && month && year.length === 4) {
      onChange(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);
    }
  };

  const handleKeyUp = (
    field: string,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== "Backspace" && event.currentTarget.value) {
      const next = event.currentTarget.nextElementSibling as HTMLInputElement;
      if (next) next.focus();
    }
  };

  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-12">
        Please tell us when you were born
      </h1>

      <div className="flex justify-center gap-2 mb-12">
        <input
          type="text"
          placeholder="D"
          value={date.day1}
          onChange={(e) => handleInputChange("day1", e.target.value)}
          onKeyUp={(e) => handleKeyUp("day1", e)}
          className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="D"
          value={date.day2}
          onChange={(e) => handleInputChange("day2", e.target.value)}
          onKeyUp={(e) => handleKeyUp("day2", e)}
          className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <span className="mx-1 self-center text-gray-400">-</span>
        <input
          type="text"
          placeholder="M"
          value={date.month1}
          onChange={(e) => handleInputChange("month1", e.target.value)}
          onKeyUp={(e) => handleKeyUp("month1", e)}
          className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="M"
          value={date.month2}
          onChange={(e) => handleInputChange("month2", e.target.value)}
          onKeyUp={(e) => handleKeyUp("month2", e)}
          className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <span className="mx-1 self-center text-gray-400">-</span>
        <input
          type="text"
          placeholder="Y"
          value={date.year1}
          onChange={(e) => handleInputChange("year1", e.target.value)}
          onKeyUp={(e) => handleKeyUp("year1", e)}
          className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Y"
          value={date.year2}
          onChange={(e) => handleInputChange("year2", e.target.value)}
          onKeyUp={(e) => handleKeyUp("year2", e)}
          className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Y"
          value={date.year3}
          onChange={(e) => handleInputChange("year3", e.target.value)}
          onKeyUp={(e) => handleKeyUp("year3", e)}
          className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Y"
          value={date.year4}
          onChange={(e) => handleInputChange("year4", e.target.value)}
          className="w-12 h-12 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

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
