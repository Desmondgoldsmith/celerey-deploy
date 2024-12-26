"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SocialSignupButton } from "../molecules/socialSignupButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const SignUpTemplate = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/auth/otp");
  };

  const handleSignup = () => {
    router.push("/auth/signin");
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
        <h1 className="text-4xl font-cirka font-light mt-4 mb-2">
          Create your Celerey Account
        </h1>
        <p className="text-sm text-gray-600 font-helvetica">
          Signup with a Google or Linkedin account, or enter your email address
          and we will send you a code to get started
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Enter Email address or Mobile No."
          className="w-full p-3 border mb-4 rounded-md focus:border-navy focus:ring-1 focus:ring-navy"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Link href="/auth/otp" passHref>
          <Button
            type="submit"
            className="w-[450px] bg-navy hover:bg-navyLight text-white"
          >
            send me a code
          </Button>
        </Link>
      </form>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t"></div>
        </div>
        <div className="relative flex justify-center text-sm mb-6 mt-6">
          <span className="px-2 bg-white text-gray-500">or</span>
        </div>
      </div>

      <div className="space-y-3">
        <SocialSignupButton provider="google" onClick={() => {}} />
        <SocialSignupButton provider="linkedin" onClick={() => {}} />
      </div>

      <p className="mt-6 text-sm h">
        <span className="text-navy">Already have an account ?</span>{" "}
        <span
          onClick={handleSignup}
          className="text-navyLight hover:cursor-pointer hover:underline "
        >
          Signup
        </span>
      </p>
    </div>
  );
};