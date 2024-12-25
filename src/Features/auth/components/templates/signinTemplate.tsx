"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SocialLoginButton } from "../molecules/socialLoginButton";
import { useRouter } from "next/navigation";

export const SignInTemplate = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/auth/otp");
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
        <h1 className="text-4xl font-cirka font-light mt-4 mb-2">Sign In</h1>
        <p className="text-sm text-gray-600 font-helvetica">
          New to Celerey?{" "}
          <a
            href="#"
            className="text-navyLight hover:cursor-pointer hover:text-navy hover:underline"
          >
            Get Started
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Enter Email address or Mobile No."
          className="w-full p-3 border rounded-md focus:border-navy focus:ring-1 focus:ring-navy"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          className="w-full bg-navy hover:bg-navyLight text-white"
        >
          Continue
        </Button>
      </form>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or</span>
        </div>
      </div>

      <div className="space-y-3">
        <SocialLoginButton provider="google" onClick={() => {}} />
        <SocialLoginButton provider="linkedin" onClick={() => {}} />
      </div>

      <p className="mt-6 text-sm hover:cursor-pointer hover:text-navy hover:underline text-navyLight">
        Need help signing in?
      </p>
    </div>
  );
};
