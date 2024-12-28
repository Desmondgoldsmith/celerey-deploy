import { Button } from "@/components/ui/button";
import { FormInput } from "../../molecules/formInput";
import BottomSection from "../../molecules/bottomSection";

interface FirstNameScreenProps {
  value: string;
  onChange: (value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const FirstNameScreen = ({
  value,
  onChange,
  onBack,
  onContinue,
}: FirstNameScreenProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onContinue();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-2">
        Tell us a bit about yourself,
        <br />
        what&apos;s your first name
      </h1>
      <p className="text-gray-600 mb-8">
        We need your first name as it&apos;s written on your passport or any
        other forms of identification
      </p>
      <FormInput
        placeholder="Enter First Name"
        value={value}
        onChange={onChange}
        required
        type="text"
      />
      <div className="flex gap-4 mt-8">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-navy hover:bg-navyLight text-white"
          disabled={!value.trim()}
        >
          Continue
        </Button>
      </div>
      <BottomSection />
    </form>
  );
};
