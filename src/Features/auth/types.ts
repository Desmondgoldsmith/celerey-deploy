export interface OTPInputProps {
  length: number;
  value: string[];
  onChange: (value: string[]) => void;
}

export interface SocialLoginButtonProps {
  provider: "google" | "linkedin";
  onClick: () => void;
}

export interface SocialSignupButtonProps {
  provider: "google" | "linkedin";
  onClick: () => void;
}
