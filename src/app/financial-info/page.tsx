"use client";

import { SectionProgressBars } from "@/Features/onboarding/components/molecules/progressBar";
import { OnboardingLayout } from "@/Features/onboarding/components/templates/sharedTemplates/onboardingLayout";
import { useOnboardingStore } from "@/Features/onboarding/state";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CurrencyScreen } from "@/Features/onboarding/components/templates/financialInfoTemplates/currencyScreen";


export default function FinancialInfo() {
  const router = useRouter();
  const {
    sections,
    currentSection,
    formData,
    updateFormData,
    updateSectionProgress,
    completeSection,
    setActiveSection,
  } = useOnboardingStore();

  useEffect(() => {
    if (!sections.personal.isCompleted) {
      router.push("/personal-info");
      return;
    }

    if (currentSection !== "financial") {
      setActiveSection("financial");
    }
  }, [sections.personal.isCompleted, currentSection, router, setActiveSection]);

  const handleFormUpdate = (updates: Partial<{ currency: string }>) => {
    updateFormData("financial", updates);
  };

  const handleBack = () => {
    const currentStepIndex = sections[currentSection].currentStep;
    if (currentStepIndex > 0) {
      const newStep = currentStepIndex - 1;
      updateSectionProgress(currentSection, newStep);
    } else {
      router.push("/personal-info");
    }
  };

  const handleContinue = () => {
    const currentStepIndex = sections[currentSection].currentStep;
    const isLastStep =
      currentStepIndex === sections[currentSection].totalSteps - 1;

    if (isLastStep) {
      completeSection("financial");
      router.push("/goals-info");
    } else {
      const newStep = currentStepIndex + 1;
      updateSectionProgress(currentSection, newStep);
    }
  };

  return (
    <OnboardingLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <SectionProgressBars
          sections={sections}
          currentSection={currentSection}
        />
        <CurrencyScreen
          value={formData.financial.currency}
          onChange={(value) => handleFormUpdate({ currency: value })}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      </div>
    </OnboardingLayout>
  );
}

