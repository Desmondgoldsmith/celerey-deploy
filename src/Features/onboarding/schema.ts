export interface PersonalInfoSchema {
  firstName: string;
  lastName: string;
  birthDate: string;
  citizenship: string;
  dualCitizenship: string;
  dependents: {
    hasDependents: string;
    numberOfDependents: string;
    agesOfDependents: string;
  };
  maritalStatus: string;
  occupation: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  identification: {
    type: string;
    file: File | null;
    fileName: string;
    uploadStatus: "idle" | "uploading" | "completed" | "error";
  };
  options: string[];
}

export interface FinancialInfoSchema {
  income: {
    employmentType: string;
    annualIncome: number;
    otherIncome?: number;
    incomeSource?: string;
  };
  expenses: {
    monthlyExpenses: number;
    majorExpenses: {
      type: string;
      amount: number;
    }[];
  };
  assets: {
    type: string;
    value: number;
    description?: string;
  }[];
  liabilities: {
    type: string;
    amount: number;
    interestRate?: number;
  }[];
  investments: {
    type: string;
    value: number;
    institution?: string;
  }[];
}

export interface OnboardingFormData {
  personal: PersonalInfoSchema;
  financial: FinancialInfoSchema;
}
