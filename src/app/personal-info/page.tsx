"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SectionId, useOnboardingStore } from "@/Features/onboarding/state";
import { PersonalInfoSchema } from "@/Features/onboarding/schema";
import { WelcomeTemplate } from "@/Features/onboarding/components/templates/personalInfoTemplates/welcomeTemplate";
import { FirstNameScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/firstNameScreen";
import { LastNameScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/lastNameScreen";
import { DateOfBirthScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/dateOfBirthScreen";
import { OccupationScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/occupationScreen";
import { CitizenshipStatusScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/citizenshipStatusScreen";
import { HomeAddressScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/homeAddressScreen";
import { MaritalStatusScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/maritalStatusScreen";
import { DependentsScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/dependantsScreen";
import { IdentificationScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/identificationScreen";
import { OptionsSelectionScreen } from "@/Features/onboarding/components/templates/personalInfoTemplates/optionsSelectionScreen";
import { OnboardingLayout } from "@/Features/onboarding/components/templates/sharedTemplates/onboardingLayout";
import { SectionProgressBars } from "@/Features/onboarding/components/molecules/progressBar";

export default function PersonalInfo() {
  const router = useRouter();
  const {
    sections,
    currentSection,
    formData,
    updateFormData,
    updateSectionProgress,
    completeSection,
    setActiveSection,
    resetOnboarding,
  } = useOnboardingStore();

  useEffect(() => {
    const shouldReset = !sections.personal.currentStep;
    if (shouldReset) {
      resetOnboarding();
    }
    setActiveSection("personal");
  }, [setActiveSection, sections.personal.currentStep, resetOnboarding]);

  const handleFormUpdate = useCallback(
    (updates: Partial<PersonalInfoSchema>) => {
      updateFormData("personal", updates);
    },
    [updateFormData]
  );

  const validateCurrentStep = useCallback((): boolean => {
    const currentStepIndex = sections[currentSection].currentStep;
    const data = formData.personal;

    switch (currentStepIndex) {
      case 1:
        return !!data.firstName.trim();
      case 2:
        return !!data.lastName.trim();
      case 3:
        return !!data.birthDate;
      case 4:
        return !!data.occupation.trim();
      case 5:
        return !!data.citizenship;
      case 6:
        return !!(
          data.address.line1 &&
          data.address.city &&
          data.address.postalCode &&
          data.address.country
        );
      case 7:
        return !!data.maritalStatus;
      case 8:
        return !!data.dependents.hasDependents;
      case 9:
        return !!(
          data.identification.type &&
          data.identification.uploadStatus === "completed"
        );
      case 10:
        return data.options.length > 0;
      default:
        return true;
    }
  }, [currentSection, sections, formData.personal]);

  const handleBack = useCallback(() => {
    const currentStepIndex = sections[currentSection].currentStep;
    if (currentStepIndex > 0) {
      const newStep = currentStepIndex - 1;
      updateSectionProgress(currentSection, newStep);
    }
  }, [currentSection, sections, updateSectionProgress]);

  const getNextSection = useCallback(
    (currentSectionId: SectionId): SectionId | null => {
      const sectionOrder: SectionId[] = [
        "personal",
        "financial",
        "goals",
        "risk",
      ];
      const currentIndex = sectionOrder.indexOf(currentSectionId);
      return currentIndex < sectionOrder.length - 1
        ? sectionOrder[currentIndex + 1]
        : null;
    },
    []
  );

  // And then in handleContinue:
  const handleContinue = useCallback(() => {
    const currentStepIndex = sections[currentSection].currentStep;
    const isLastStep =
      currentStepIndex === sections[currentSection].totalSteps - 1;

    if (!validateCurrentStep()) {
      return;
    }

    if (isLastStep) {
      completeSection(currentSection);
      const nextSection = getNextSection(currentSection);
      if (nextSection) {
        setActiveSection(nextSection);
        router.push(`/${nextSection}-info`);
      }
    } else {
      const newStep = currentStepIndex + 1;
      updateSectionProgress(currentSection, newStep);
    }
  }, [
    currentSection,
    sections,
    validateCurrentStep,
    completeSection,
    getNextSection,
    setActiveSection,
    router,
    updateSectionProgress,
  ]);

  const renderStep = () => {
    const currentStepIndex = sections[currentSection].currentStep;
    const personalData = formData.personal;

    switch (currentStepIndex) {
      case 0:
        return <WelcomeTemplate onStart={handleContinue} />;
      case 1:
        return (
          <FirstNameScreen
            value={personalData.firstName}
            onChange={(value) => handleFormUpdate({ firstName: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 2:
        return (
          <LastNameScreen
            firstName={personalData.firstName}
            value={personalData.lastName}
            onChange={(value) => handleFormUpdate({ lastName: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 3:
        return (
          <DateOfBirthScreen
            value={personalData.birthDate}
            onChange={(value) => handleFormUpdate({ birthDate: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 4:
        return (
          <OccupationScreen
            value={personalData.occupation}
            onChange={(value) => handleFormUpdate({ occupation: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 5:
        return (
          <CitizenshipStatusScreen
            value={personalData.citizenship}
            dualCitizenship={personalData.dualCitizenship}
            onChange={(value, dualValue) =>
              handleFormUpdate({
                citizenship: value,
                dualCitizenship: dualValue || personalData.dualCitizenship,
              })
            }
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 6:
        return (
          <HomeAddressScreen
            values={personalData.address}
            onChange={(field, value) =>
              handleFormUpdate({
                address: { ...personalData.address, [field]: value },
              })
            }
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 7:
        return (
          <MaritalStatusScreen
            value={personalData.maritalStatus}
            onChange={(value) => handleFormUpdate({ maritalStatus: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 8:
        return (
          <DependentsScreen
            value={personalData.dependents}
            onChange={(value) => handleFormUpdate({ dependents: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 9:
        return (
          <IdentificationScreen
            value={personalData.identification}
            onChange={(value) => handleFormUpdate({ identification: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 10:
        return (
          <OptionsSelectionScreen
            value={personalData.options}
            onChange={(value) => handleFormUpdate({ options: value })}
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
