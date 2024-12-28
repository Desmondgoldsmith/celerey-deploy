import { NavigationButtons } from "../../molecules/navButtons";

export const BirthDateScreen = ({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) => (
  <div className="text-center max-w-xl mx-auto">
    <h1 className="text-3xl font-cirka mb-4">Please tell us when you born</h1>
    <div className="flex justify-center gap-2 mb-8">
      {["D", "D", "M", "M", "Y", "Y", "Y", "Y"].map((placeholder, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          placeholder={placeholder}
          className="w-10 h-10 border rounded-md text-center focus:border-navy focus:ring-1 focus:ring-navy"
        />
      ))}
    </div>
    <NavigationButtons onBack={onBack} onContinue={onContinue} />
  </div>
);
