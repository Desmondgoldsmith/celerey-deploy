"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OTPInput } from "../molecules/otpInput";
import { useRouter } from "next/navigation";

export const SignupOTPTemplate = () => {
  const [otpValues, setOTPValues] = useState(Array(6).fill(""));
  const router = useRouter();

  const handleOpenEmail = () => {
    window.open("https://mail.google.com", "_blank");
  };

  const handleAccountCreation = () => {
    router.push("/personal-info");
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-8">
        <Image
          src="/assets/logo1.svg"
          alt="Celerey Logo"
          width={50}
          height={50}
          className="mx-auto"
        />
        <h1 className="text-3xl font-cirka mt-4 mb-2">
          {" "}
          We&apos;ve sent the code to your email
        </h1>
        <p className="text-sm text-gray-600 font-helvetica">
          Check your email and enter the 6-digit code just sent to you
        </p>
      </div>

      <OTPInput length={6} value={otpValues} onChange={setOTPValues} />

      <Button
        onClick={handleAccountCreation}
        className="md:w-80 w-full bg-navy text-white mb-4 hover:bg-navyLight"
      >
        Create My Account
      </Button>

      <div className="space-y-2 text-sm">
        <p
          className="text-gray-600 hover:cursor-pointer hover:text-navyLight"
          onClick={handleOpenEmail}
        >
          Open Email
        </p>
        <p className="text-navyLight hover:cursor-pointer">Resend The Code</p>
      </div>
    </div>
  );
};
