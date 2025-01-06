import { Section, Step } from "./types";

export const PERSONAL_INFO_STEPS: Step[] = [
  { id: "welcome", title: "Welcome to Celerey" },
  {
    id: "firstname",
    title: "First Name",
    subtitle: "Tell us a bit about yourself",
  },
  { id: "lastname", title: "Last Name" },
  { id: "birthdate", title: "Date of Birth" },
];

export const SECTIONS: Section[] = [
  {
    id: "personal",
    title: "Personal Information",
    steps: PERSONAL_INFO_STEPS,
    isActive: true,
  },
  {
    id: "financial",
    title: "Financial Information",
    steps: [],
    isActive: false,
  },
  {
    id: "goals",
    title: "Goals & Aspirations",
    steps: [],
    isActive: false,
  },
  {
    id: "risk",
    title: "Risk Profile",
    steps: [],
    isActive: false,
  },
  {
    id: "knowledge",
    title: "Financial Knowledge",
    steps: [],
    isActive: false,
  },
];
