import { cn } from "@/utils/classNames";
import { BaseProps } from "@/types/common";

interface ContainerProps extends BaseProps {
  as?: keyof JSX.IntrinsicElements;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const Container = ({
  as: Component = "div",
  maxWidth = "2xl",
  className,
  children,
}: ContainerProps) => {
  const maxWidthClass = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-6xl",
    "2xl": "max-w-7xl",
  }[maxWidth];

  return (
    <Component
      className={cn("mx-auto px-4 sm:px-6 lg:px-8", maxWidthClass, className)}
    >
      {children}
    </Component>
  );
};

export default Container;
