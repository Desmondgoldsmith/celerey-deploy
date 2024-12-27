"use client";

import { SectionProgressBars } from "@/Features/onboarding/components/molecules/progressBar";
import { FirstNameScreen } from "@/Features/onboarding/components/templates/firstNameScreen";
import { LastNameScreen } from "@/Features/onboarding/components/templates/lastNameScreen";
import { OnboardingLayout } from "@/Features/onboarding/components/templates/personalInfoLayout";
import { WelcomeTemplate } from "@/Features/onboarding/components/templates/welcomeTemplate";
import { useState } from "react";

const SECTIONS = [
  {
    id: "personal",
    title: "Personal Information",
    totalSteps: 11,
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
  });

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleContinue = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
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
