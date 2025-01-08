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
    if (!sections.risk.isCompleted) {
      router.push("/risk-info");
      return;
    }

    if (currentSection !== "knowledge") {
      setActiveSection("knowledge");
    }
  }, [sections.risk.isCompleted, currentSection, router, setActiveSection]);

  const handleFormUpdate = useCallback(
    (updates: Partial<KnowledgeInfoSchema>) => {
      updateFormData("knowledge", updates);
    },
    [updateFormData]
  );

  const validateCurrentStep = useCallback((): boolean => {
    const currentStepIndex = sections[currentSection].currentStep;
    const data = formData.knowledge;

    switch (currentStepIndex) {
      case 0: // Welcome screen, no validation needed
        return true;
      case 1: // Goals information validation
        return (
          !!data.knowledge
        );
      default:
        return true;
    }
  }, [currentSection, sections, formData.knowledge]);

  const handleBack = useCallback(() => {
    const currentStepIndex = sections[currentSection].currentStep;
    if (currentStepIndex > 0) {
      const newStep = currentStepIndex - 1;
      updateSectionProgress(currentSection, newStep);
    } else {
      router.push("/risk-info");
    }
  }, [currentSection, sections, router, updateSectionProgress]);

  const handleContinue = useCallback(() => {
    const currentStepIndex = sections[currentSection].currentStep;
    const isLastStep =
      currentStepIndex === sections[currentSection].totalSteps - 1;

    if (!validateCurrentStep()) {
      return;
    }

    if (isLastStep) {
      completeSection("knowledge");
      router.push("#");
    } else {
      const newStep = currentStepIndex + 1;
      updateSectionProgress(currentSection, newStep);
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
    const currentStepIndex = sections[currentSection].currentStep;
    const goalsData = formData.goals;

    switch (currentStepIndex) {
      case 0:
        return (
          <SurveyScreen
            value={formData.knowledge.cashKnowledge}
            onChange={(value) => handleFormUpdate({ cashKnowledge: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 1:
        return (
          <GoalsScreen
            retirementAge={goalsData.retirementAge}
            retirementIncome={goalsData.retirementIncome}
            goalsCurrency={goalsData.goalsCurrency}
            onChange={(field, value) => handleFormUpdate({ [field]: value })}
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
