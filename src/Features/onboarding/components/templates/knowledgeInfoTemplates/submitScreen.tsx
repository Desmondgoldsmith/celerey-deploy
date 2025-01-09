import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface NetWorthScreenProps {
  onContinue: () => void;
  onBack: () => void;
}

export const SubmitScreen = ({ onContinue, onBack }: NetWorthScreenProps) => {
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();

  const handleSave = () => {
    router.push("/asset-allocation");
  };

  useEffect(() => {
    // Fetch the state from local storage
    const storedState = localStorage.getItem("onboarding-storage");
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      setFirstName(parsedState.state?.formData?.personal?.firstName || null);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit} className="text-center max-w-xl mx-auto">
      <h1 className="text-4xl font-cirka mb-6">
        Congratulations
        <span className="text-navyLight"> {firstName || "User"}</span>, you have
        completed the onboarding would you like to know your ideal asset
        allocation?
      </h1>

      <div className="flex gap-4 max-w-[200px] mx-auto mb-14">
        <Button variant="outline" className="flex-1">
          Yes
        </Button>
        <Button variant="outline" className="flex-1">
          No
        </Button>
      </div>

      <div className="flex gap-4 max-w-md mx-auto">
        <Button variant="outline" onClick={onBack} className="flex-1">
          Back
        </Button>
        <Button
          type="submit"
          className="flex-1 bg-navy w-full hover:bg-navyLight text-white"
          onClick={handleSave}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
