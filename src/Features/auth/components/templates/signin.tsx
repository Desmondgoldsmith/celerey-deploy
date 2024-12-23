import Image from "next/image";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Welcome to Celerey</h1>
        <p className="text-gray-600">
          Celerey is the easiest way to make informed decisions about your
          wealth.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="relative w-64 h-64">
          <Image
            src="/illustration.svg"
            alt="Financial Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">Your path to financial concierge</h2>
        <p className="text-gray-600">
          Celerey is the easiest way to make informed decisions about your
          wealth
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="outline">Sign in to your account</Button>
        <Button>Create an account</Button>
      </div>
    </div>
  );
};

export default SignIn;
