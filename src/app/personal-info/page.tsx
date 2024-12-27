"use client";

import { SectionProgressBars } from "@/Features/onboarding/components/molecules/progressBar";
import { CitizenshipStatusScreen } from "@/Features/onboarding/components/templates/citizenshipStatusScreen";
import { DateOfBirthScreen } from "@/Features/onboarding/components/templates/dateOfBirthScreen";
import { FirstNameScreen } from "@/Features/onboarding/components/templates/firstNameScreen";
import { HomeAddressScreen } from "@/Features/onboarding/components/templates/homeAddressScreen";
import { LastNameScreen } from "@/Features/onboarding/components/templates/lastNameScreen";
import { OnboardingLayout } from "@/Features/onboarding/components/templates/onboardingLayout";
import { WelcomeTemplate } from "@/Features/onboarding/components/templates/welcomeTemplate";
import { OccupationScreen } from "@/Features/onboarding/components/templates/occupationScreen";
import { MaritalStatusScreen } from "@/Features/onboarding/components/templates/maritalStatusScreen";
import { DependentsScreen } from "@/Features/onboarding/components/templates/dependantsScreen";
import { useState } from "react";

const SECTIONS = [
  {
    id: "personal",
    title: "Personal Information",
    totalSteps: 10,
    isActive: true,
  },
  {
    id: "financial",
    title: "Financial Information",
    totalSteps: 8,
    isActive: false,
  },
  {
    id: "goals",
    title: "Goals & Aspirations",
    totalSteps: 6,
    isActive: false,
  },
  {
    id: "risk",
    title: "Risk Profile",
    totalSteps: 7,
    isActive: false,
  },
];

export default function PersonalInfo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    citizenship: "",
    dualCitizenship: "",
    dependents: {
      hasDependents: "",
      numberOfDependents: "",
      agesOfDependents: "",
    },
    maritalStatus: "",
    occupation: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
  });

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleContinue = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 11));
  };

  const sectionsWithProgress = SECTIONS.map((section) => ({
    ...section,
    currentStep: section.id === "personal" ? currentStep : 0,
  }));

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeTemplate onStart={handleContinue} />;
      case 1:
        return (
          <FirstNameScreen
            value={formData.firstName}
            onChange={(value) => setFormData({ ...formData, firstName: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 2:
        return (
          <LastNameScreen
            firstName={formData.firstName}
            value={formData.lastName}
            onChange={(value) => setFormData({ ...formData, lastName: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 3:
        return (
          <DateOfBirthScreen
            value={formData.birthDate}
            onChange={(value) => setFormData({ ...formData, birthDate: value })}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 4:
        return (
          <OccupationScreen
            value={formData.occupation}
            onChange={(value) =>
              setFormData({ ...formData, occupation: value })
            }
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 5:
        return (
          <CitizenshipStatusScreen
            value={formData.citizenship}
            dualCitizenship={formData.dualCitizenship}
            onChange={(value, dualValue) =>
              setFormData({
                ...formData,
                citizenship: value,
                dualCitizenship: dualValue || formData.dualCitizenship,
              })
            }
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 6:
        return (
          <HomeAddressScreen
            values={formData.address}
            onChange={(field, value) =>
              setFormData({
                ...formData,
                address: { ...formData.address, [field]: value },
              })
            }
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 7:
        return (
          <MaritalStatusScreen
            value={formData.maritalStatus}
            onChange={(value) =>
              setFormData({ ...formData, maritalStatus: value })
            }
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      case 8:
        return (
          <DependentsScreen
            value={formData.dependents}
            onChange={(value) =>
              setFormData({ ...formData, dependents: value })
            }
            onBack={handleBack}
            onContinue={handleContinue}
          />
        );
      default:
        return null;
    }
  };

  // Calculate which sections are active based on current progress
  const activeSection = currentStep === 0 ? "" : "personal";

  return (
    <OnboardingLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <SectionProgressBars
          sections={sectionsWithProgress}
          activeSection={activeSection}
        />
        <div className="mt-12">{renderStep()}</div>
      </div>
    </OnboardingLayout>
  );
}
