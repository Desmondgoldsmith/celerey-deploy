"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboardingStore } from "@/Features/onboarding/state";
import { SectionProgressBars } from "@/Features/onboarding/components/molecules/progressBar";
import { FinancialInfoSchema } from "@/Features/onboarding/schema";
import { OnboardingLayout } from "@/Features/onboarding/components/templates/sharedTemplates/onboardingLayout";
import { CurrencyScreen } from "@/Features/onboarding/components/templates/financialInfoTemplates/currencyScreen";
import { IncomeScreen } from "@/Features/onboarding/components/templates/financialInfoTemplates/incomeScreen";
// import { ExpensesScreen } from "@/Features/onboarding/components/templates/financialInfoTemplates/expensesScreen";
// import { AssetsScreen } from "@/Features/onboarding/components/templates/financialInfoTemplates/assetsScreen";
// import { LiabilitiesScreen } from "@/Features/onboarding/components/templates/financialInfoTemplates/liabilitiesScreen";

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


    const handleFormUpdate = useCallback(
      (updates: Partial<FinancialInfoSchema>) => {
        updateFormData("financial", updates);
      },
      [updateFormData]
    );


  const validateCurrentStep = useCallback((): boolean => {
    const currentStepIndex = sections[currentSection].currentStep;
    const data = formData.financial;

    switch (currentStepIndex) {
      case 0: // Currency selection
        return !!data.currency;
      case 1: // Passive income validation
        return (
          data.passiveIncome.rentalIncome >= 0 &&
          data.passiveIncome.dividends >= 0 &&
          data.passiveIncome.interestIncome >= 0 &&
          data.passiveIncome.otherIncome >= 0
        );
      case 2: // Annual expenses validation
        return (
          data.annualExpenses.home >= 0 &&
          data.annualExpenses.childcare >= 0 &&
          data.annualExpenses.education >= 0 &&
          data.annualExpenses.healthcare >= 0 &&
          data.annualExpenses.travel >= 0 &&
          data.annualExpenses.giving >= 0
        );
      case 3: // Assets validation
        return (
          data.assets.realEstate >= 0 &&
          data.assets.cash >= 0 &&
          data.assets.publicSecurities >= 0 &&
          data.assets.privateSecurities >= 0
        );
      case 4: // Liabilities validation
        return (
          data.liabilities.mortgages >= 0 &&
          data.liabilities.loans >= 0 &&
          data.liabilities.creditCards >= 0 &&
          data.liabilities.assetFinance >= 0 &&
          data.liabilities.otherLiabilities >= 0
        );
      default:
        return true;
    }
  }, [currentSection, sections, formData.financial]);


  
  const handleBack = useCallback(() => {
    const currentStepIndex = sections[currentSection].currentStep;
    if (currentStepIndex > 0) {
      const newStep = currentStepIndex - 1;
      updateSectionProgress(currentSection, newStep);
    } else {
      router.push("/personal-info");
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
      completeSection("financial");
      router.push("/goals-info");
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
    const financialData = formData.financial;

    switch (currentStepIndex) {
      case 0:
        return (
          <CurrencyScreen
            value={financialData.currency}
            onChange={(value) => handleFormUpdate({ currency: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 1:
        return (
          <IncomeScreen
            values={financialData.passiveIncome}
            onChange={(field, value) =>
              handleFormUpdate({
                passiveIncome: {
                  ...financialData.passiveIncome,
                  [field]: value,
                },
              })
            }
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      // case 2:
      //   return (
      //     <ExpensesScreen
      //       value={financialData.expenses}
      //       onChange={(value) => handleFormUpdate({ expenses: value })}
      //       onBack={handleBack}
      //       onContinue={handleContinue}
      //     />
      //   );
      // case 3:
      //   return (
      //     <AssetsScreen
      //       value={financialData.assets}
      //       onChange={(value) => handleFormUpdate({ assets: value })}
      //       onBack={handleBack}
      //       onContinue={handleContinue}
      //     />
      //   );
      // case 4:
      //   return (
      //     <LiabilitiesScreen
      //       value={financialData.liabilities}
      //       onChange={(value) => handleFormUpdate({ liabilities: value })}
      //       onBack={handleBack}
      //       onContinue={handleContinue}
      //     />
      //   );
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