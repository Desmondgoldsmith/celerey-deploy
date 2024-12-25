"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OTPInput } from "../molecules/otpInput";

export const OTPTemplate = () => {
  const [otpValues, setOTPValues] = useState(Array(6).fill(""));
  const email = "example@gmail.com";

  const handleOpenEmail = () => {
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-8">
        <Image
          src="/assets/logo1.svg"
          alt="Celerey Logo"
          width={60}
          height={60}
          className="mx-auto"
        />
        <h1 className="text-4xl font-cirka mt-4 mb-2">Verify your identity</h1>
        <p className="text-sm text-gray-600 font-helvetica">
          Enter the code we just sent to {email}
        </p>
      </div>

      <OTPInput length={6} value={otpValues} onChange={setOTPValues} />

      <Button className="w-full bg-navy text-white mb-4 hover:bg-navyLight">
        Sign in to my dashboard
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
