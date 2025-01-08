"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { KnowledgeInfoSchema } from "@/Features/onboarding/schema";
import { useOnboardingStore } from "@/Features/onboarding/state";
import { SectionProgressBars } from "@/Features/onboarding/components/molecules/progressBar";
import { OnboardingLayout } from "@/Features/onboarding/components/templates/sharedTemplates/onboardingLayout";
import { SurveyScreen } from "@/Features/onboarding/components/templates/knowledgeInfoTemplates/questionsScreen";

export default function KnowledgeInfo() {
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
    if (!sections?.risk?.isCompleted) {
      router.push("/risk-info")
      return;
    }

    if (currentSection !== "knowledge") {
      setActiveSection("knowledge");
    }
  }, [sections, currentSection, router, setActiveSection]);

  const handleFormUpdate = useCallback(
    (updates: Partial<KnowledgeInfoSchema>) => {
      updateFormData("knowledge", updates);
    },
    [updateFormData]
  );

  const validateCurrentStep = useCallback((): boolean => {
    const currentStepIndex = sections[currentSection]?.currentStep;
    const data = formData.knowledge;

    if (!data) return false;

    switch (currentStepIndex) {
      case 0:
        return true;
      case 1:
        return (
          !!data.cashKnowledge &&
          !!data.investingExperience &&
          !!data.publicSharesKnowledge &&
          !!data.publicSharesExperience &&
          !!data.investmentGradeBondsKnowledge
        );
      default:
        return true;
    }
  }, [currentSection, sections, formData]);

  const handleBack = useCallback(() => {
    const currentStepIndex = sections[currentSection]?.currentStep;
    if (currentStepIndex > 0) {
      updateSectionProgress(currentSection, currentStepIndex - 1);
    } else {
      router.push("/risk-info");
    }
  }, [currentSection, sections, router, updateSectionProgress]);

  const handleContinue = useCallback(() => {
    const currentStepIndex = sections[currentSection]?.currentStep;
    const isLastStep =
      currentStepIndex === sections[currentSection]?.totalSteps - 1;

    if (!validateCurrentStep()) {
      console.error("Validation failed.");
      return;
    }

    if (isLastStep) {
      completeSection("knowledge");
      router.push("#");
    } else {
      updateSectionProgress(currentSection, currentStepIndex + 1);
    }
  }, [
    currentSection,
    sections,
    validateCurrentStep,
    completeSection,
    router,
    updateSectionProgress,
  ]);

  const renderStep = () => {
    const currentStepIndex = sections[currentSection]?.currentStep || 0;
    const knowledgeData = formData.knowledge || {};

    switch (currentStepIndex) {
      case 0:
        return (
          <SurveyScreen
            value={knowledgeData}
            onChange={handleFormUpdate}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <OnboardingLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <SectionProgressBars
          sections={sections}
          currentSection={currentSection}
        />
        <div className="mt-12">{renderStep()}</div>
      </div>
    </OnboardingLayout>
  );
}
