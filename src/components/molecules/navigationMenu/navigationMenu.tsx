"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/classNames";
import { BaseProps } from "@/types/common";

interface NavigationItem {
  name: string;
  href: string;
}

interface NavigationMenuProps extends BaseProps {
  items: NavigationItem[];
}

const NavigationMenu = ({ items, className }: NavigationMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={className}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors",
              pathname === item.href
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-900"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-500 hover:text-gray-900"
        >
          click here
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;
