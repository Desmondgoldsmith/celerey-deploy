import { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="px-6 py-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-32">
            {/* Logo placeholder */}
            <Image
              src="/assets/logo2.svg"
              alt="Celerey"
              width={120}
              height={40}
              priority
            />
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-600">
              Tax Calculator
            </a>
            <a href="#" className="text-sm text-gray-600">
              Goals & Planning
            </a>
            <a href="#" className="text-sm text-gray-600">
              Knowledge Hub
            </a>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
      <footer className="border-t mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">© Celerey 2024</span>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-gray-500">
              Help
            </a>
            <a href="#" className="text-sm text-gray-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
