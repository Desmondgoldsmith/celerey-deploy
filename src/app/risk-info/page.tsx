"use client";

import { SectionProgressBars } from "@/Features/onboarding/components/molecules/progressBar";
import { OnboardingLayout } from "@/Features/onboarding/components/templates/sharedTemplates/onboardingLayout";
import { useOnboardingStore } from "@/Features/onboarding/state";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RiskInfo() {
  const router = useRouter();
  const { sections, currentSection, setActiveSection } = useOnboardingStore();
  useEffect(() => {
    // Check if personal section is completed
    if (!sections.goals.isCompleted) {
      router.push("/financial-info");
      return;
    }

    if (currentSection !== "risk") {
      setActiveSection("risk");
    }
  }, [
    sections.goals.isCompleted,
    currentSection,
    router,
    setActiveSection,
  ]);

  return (
    <OnboardingLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <SectionProgressBars
          sections={sections}
          currentSection={currentSection}
        />
        <h1 className="mt-[240px] text-center text-7xl">
          This is the risk information page!
        </h1>
      </div>
    </OnboardingLayout>
  );
}
