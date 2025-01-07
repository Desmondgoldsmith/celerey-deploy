"use client";

import Spinner from "@/components/ui/spinner";
import { useAuthStore } from "@/Features/auth/state";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/auth/signin");
    }
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated) {
    return <div className="h-screen w-screen flex justify-center items-center"><Spinner/></div>;
  }

  return <>{children}</>;
};

export default ProtectedLayout;
