import React from "react";
import { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "crema" | "sage" | "dark" | "stone";
  className?: string;
}

export default function Badge({
  children,
  icon: Icon,
  variant = "crema",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    crema: "bg-[#FDF2E7] text-[#D97724] border-[#D97724]/30",
    sage: "bg-[#DCFCE7] text-[#15803D] border-[#15803D]/30",
    dark: "bg-[#281E18] text-[#F7F3ED] border-[#3E2C22]",
    stone: "bg-[#EFE8DE] text-[#281E18] border-[#D8CEBE]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide border shadow-xs ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}
