export interface Step {
  id: string;
  title: string;
  subtitle?: string;
}

export interface Section {
  id: string;
  title: string;
  steps: Step[];
  isActive: boolean;
}
