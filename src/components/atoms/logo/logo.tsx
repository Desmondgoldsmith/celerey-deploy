import Link from "next/link";
import { BaseProps } from "@/types/common";
import { cn } from "@/utils/classNames";

interface LogoProps extends BaseProps {
  href?: string;
}

const Logo = ({ href = "/", className }: LogoProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2",
        "text-xl font-semibold text-gray-900",
        className
      )}
    >
      <span>Celerey</span>
    </Link>
  );
};

export default Logo;
