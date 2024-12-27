import { Button } from "@/components/ui/button";
import { FormInput } from "../molecules/formInput";
import BottomSection from "../molecules/bottomSection";

interface LastNameScreenProps {
  firstName: string;
  value: string;
  onChange: (value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export const LastNameScreen = ({
  firstName,
  value,
  onChange,
  onBack,
  onContinue,
}: LastNameScreenProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onContinue();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-4">
        Thanks <span className="text-navyLight">{firstName}!</span> Please tell
        us
        <br />
        your last name
      </h1>
      <p className="text-gray-600 mb-12">
        We need your last name as it&apos;s written on your <br></br>passport or
        any other forms of identification
      </p>
      <FormInput
        placeholder="Enter Last Name"
        value={value}
        onChange={onChange}
        type="text"
        required
      />
      <div className="flex gap-4 mt-12">
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
          className="flex-1 bg-purple-900 text-white hover:bg-purple-800"
          disabled={!value.trim()}
        >
          Continue
        </Button>
      </div>
      <BottomSection />
    </form>
  );
};
