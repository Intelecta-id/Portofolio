import React from "react";
import { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "teal" | "verified" | "amber" | "outline" | "coral";
  className?: string;
}

export default function Badge({
  children,
  icon: Icon,
  variant = "teal",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    teal: "bg-[#E1F4F6] text-[#075E68] border border-[#0B7F8C]/25",
    verified: "bg-[#ECFDF5] text-[#059669] border border-[#059669]/30 font-bold",
    amber: "bg-[#FEF3C7] text-[#B45309] border border-[#F59E0B]/30 font-bold",
    outline: "bg-white/90 text-[#0A2230] border border-[#0A2230]/15 shadow-xs",
    coral: "bg-[#FEF2F0] text-[#E26D5C] border border-[#E26D5C]/30 font-bold",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-xs transition-spring ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}
