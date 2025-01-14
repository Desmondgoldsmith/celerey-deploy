import { Button } from "@/components/ui/button";
import { FormInput } from "../../molecules/formInput";
import { LastNameScreenProps } from "@/Features/onboarding/types";

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
          className="flex-1 bg-navy text-white hover:bg-navyLight"
          disabled={!value.trim()}
        >
          Continue
        </Button>
      </div>
    </form>
  );
};
