"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { KnowledgeInfoSchema } from "@/Features/onboarding/schema";
import { useOnboardingStore } from "@/Features/onboarding/state";
import { SectionProgressBars } from "@/Features/onboarding/components/molecules/progressBar";
import { OnboardingLayout } from "@/Features/onboarding/components/templates/sharedTemplates/onboardingLayout";
import { Page1 } from "@/Features/onboarding/components/templates/knowledgeInfoTemplates/page1";
import { Page2 } from "@/Features/onboarding/components/templates/knowledgeInfoTemplates/page2";
import { Page3 } from "@/Features/onboarding/components/templates/knowledgeInfoTemplates/page3";
import { Page4 } from "@/Features/onboarding/components/templates/knowledgeInfoTemplates/page4";
import { Page5 } from "@/Features/onboarding/components/templates/knowledgeInfoTemplates/page5";
import { SubmitScreen } from "@/Features/onboarding/components/templates/knowledgeInfoTemplates/submitScreen";

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
      router.push("/risk-info");
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

    console.log("Validating step:", currentStepIndex);
    console.log("Form data:", data);

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
      case 2:
        return (
          !!data.investmentGradeBondsExperience &&
          !!data.nonInvestmentGradeBondsKnowledge &&
          !!data.nonInvestmentGradeBondsExperience &&
          !!data.collectiveInvestmentsInstrumentsKnowledge &&
          !!data.collectiveInvestmentsInstrumentsExperience
        );
      case 3:
        return (
          !!data.derivativesKnowledge &&
          !!data.derivativesExperience &&
          !!data.forexKnowledge &&
          !!data.commoditiesKnowledge &&
          !!data.commoditiesExperience
        );
      case 4:
        return (
          !!data.hybridInvestmentsKnowledge &&
          !!data.privateMarketInstrumentsKnowledge &&
          !!data.privateMarketInstrumentsExperience &&
          !!data.realEstateKnowledge &&
          !!data.realEstateExperience
        );
      case 5:
        return (
          !!data.altAssetsKnowledge &&
          !!data.leveragedInstrumentsKnowledge &&
          !!data.leveragedInstrumentsExperience &&
          !!data.privateCreditKnowledge
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

    console.log("Current step index:", currentStepIndex);
    console.log("Is last step:", isLastStep);

    if (!validateCurrentStep()) {
      console.error("Validation failed on step:", currentStepIndex);
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

    console.log("Rendering step:", currentStepIndex);

    switch (currentStepIndex) {
      case 0:
        return (
          <Page1
            value={knowledgeData}
            onChange={handleFormUpdate}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 1:
        return (
          <Page2
            value={knowledgeData}
            onChange={handleFormUpdate}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 2:
        return (
          <Page3
            value={knowledgeData}
            onChange={handleFormUpdate}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 3:
        return (
          <Page4
            value={knowledgeData}
            onChange={handleFormUpdate}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 4:
        return (
          <Page5
            value={knowledgeData}
            onChange={handleFormUpdate}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 5:
        return <SubmitScreen onContinue={handleContinue} onBack={handleBack} />;
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
