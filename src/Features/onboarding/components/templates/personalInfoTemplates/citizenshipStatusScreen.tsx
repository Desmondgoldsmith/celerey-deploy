import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CitizenshipStatusScreenProps {
  value: string;
  dualCitizenship: string;
  onChange: (value: string, dualValue?: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

const CITIZENSHIP_OPTIONS = [
  "Afghan",
  "Albanian",
  "Algerian",
  "American",
  "Andorran",
  "Angolan",
  "Antiguan",
  "Argentine",
  "Armenian",
  "Australian",
  "Austrian",
  "Azerbaijani",
  "Bahamian",
  "Bahraini",
  "Bangladeshi",
  "Barbadian",
  "Belarusian",
  "Belgian",
  "Belizean",
  "Beninese",
  "Bhutanese",
  "Bolivian",
  // we can add more nationalities...
];

export const CitizenshipStatusScreen = ({
  value,
  dualCitizenship,
  onChange,
  onBack,
  onContinue,
}: CitizenshipStatusScreenProps) => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-12">
        What&apos;s your citizenship status
      </h1>

      <div className="space-y-4 mb-12">
        <Select value={value} onValueChange={(val) => onChange(val)}>
          <SelectTrigger className="w-full text-left h-12">
            <SelectValue placeholder="Citizenship" />
          </SelectTrigger>
          <SelectContent>
            {CITIZENSHIP_OPTIONS.map((citizenship) => (
              <SelectItem
                key={citizenship}
                value={citizenship.toLowerCase()}
                className="cursor-pointer hover:bg-purple-50"
              >
                {citizenship}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={dualCitizenship}
          onValueChange={(val) => onChange(value, val)}
        >
          <SelectTrigger className="w-full text-left h-12 text-gray-500">
            <SelectValue placeholder="Dual citizenship (Optional)" />
          </SelectTrigger>
          <SelectContent>
            {CITIZENSHIP_OPTIONS.filter((c) => c.toLowerCase() !== value).map(
              (citizenship) => (
                <SelectItem
                  key={citizenship}
                  value={citizenship.toLowerCase()}
                  className="cursor-pointer hover:bg-purple-50"
                >
                  {citizenship}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
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
