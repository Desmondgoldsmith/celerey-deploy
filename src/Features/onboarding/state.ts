import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PersonalInfoSchema, FinancialInfoSchema } from "./schema";
import { Section } from "./types";

export type SectionId = "personal" | "financial" | "goals" | "risk";

const DEFAULT_SECTIONS: Record<SectionId, Section> = {
  personal: {
    id: "personal",
    title: "Personal Information",
    totalSteps: 11,
    currentStep: 0,
    isCompleted: false,
    isActive: true,
  },
  financial: {
    id: "financial",
    title: "Financial Information",
    totalSteps: 8,
    currentStep: 0,
    isCompleted: false,
    isActive: false,
  },
  goals: {
    id: "goals",
    title: "Goals & Aspirations",
    totalSteps: 6,
    currentStep: 0,
    isCompleted: false,
    isActive: false,
  },
  risk: {
    id: "risk",
    title: "Risk Profile",
    totalSteps: 7,
    currentStep: 0,
    isCompleted: false,
    isActive: false,
  },
};

interface OnboardingFormData {
  personal: PersonalInfoSchema;
  financial: FinancialInfoSchema;
}

const DEFAULT_FORM_DATA: OnboardingFormData = {
  personal: {
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
    identification: {
      type: "",
      file: null,
      fileName: "",
      uploadStatus: "idle",
    },
    options: [],
  },
  financial: {
    name: "",
  },
};

interface OnboardingState {
  currentSection: SectionId;
  sections: Record<SectionId, Section>;
  formData: OnboardingFormData;
}

interface OnboardingStore extends OnboardingState {
  updateFormData: <T extends keyof OnboardingFormData>(
    section: T,
    updates: Partial<OnboardingFormData[T]>
  ) => void;
  updateSectionProgress: (sectionId: SectionId, step: number) => void;
  completeSection: (sectionId: SectionId) => void;
  setActiveSection: (sectionId: SectionId) => void;
  resetOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      currentSection: "personal",
      sections: DEFAULT_SECTIONS,
      formData: DEFAULT_FORM_DATA,

      updateFormData: (section, updates) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [section]: {
              ...state.formData[section],
              ...updates,
            },
          },
        })),

      updateSectionProgress: (sectionId, step) =>
        set((state) => ({
          sections: {
            ...state.sections,
            [sectionId]: {
              ...state.sections[sectionId],
              currentStep: step,
            },
          },
        })),

      completeSection: (sectionId) =>
        set((state) => ({
          sections: {
            ...state.sections,
            [sectionId]: {
              ...state.sections[sectionId],
              isCompleted: true,
              isActive: false,
            },
          },
        })),

      setActiveSection: (sectionId) =>
        set((state) => {
          const updatedSections = Object.entries(state.sections).reduce<
            Record<SectionId, Section>
          >(
            (acc, [key, section]) => ({
              ...acc,
              [key]: {
                ...section,
                isActive: key === sectionId,
              },
            }),
            {} as Record<SectionId, Section>
          );

          return {
            currentSection: sectionId,
            sections: updatedSections,
          };
        }),

      resetOnboarding: () =>
        set(() => ({
          currentSection: "personal",
          sections: DEFAULT_SECTIONS,
          formData: DEFAULT_FORM_DATA,
        })),
    }),
    {
      name: "onboarding-storage",
    }
  )
);