import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconRight?: LucideIcon;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  icon: IconLeft,
  iconRight: IconRight,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  className = "",
  style,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-2xl transition-spring focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-6 py-3.5 gap-2.5 font-bold",
  };

  const variantStyles = {
    primary:
      "bg-[#0C2725] text-white hover:bg-[#153E3B] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-[#0C2725]",
    secondary:
      "bg-[#FFFFFF] text-[#0C2725] border border-[#E8E3D9] hover:bg-[#F5F1EB] hover:border-[#D8D2C5] active:scale-[0.98] shadow-xs focus-visible:ring-[#0C2725]",
    outline:
      "border border-[#0D9488]/40 text-[#09736A] bg-transparent hover:border-[#0D9488] hover:bg-[#E6F2F0] active:scale-[0.98] focus-visible:ring-[#0D9488]",
    ghost:
      "text-[#09736A] bg-transparent hover:bg-[#E6F2F0] active:scale-[0.98] focus-visible:ring-[#0D9488]",
    whatsapp:
      "bg-[#107C41] text-white hover:bg-[#0B6634] active:scale-[0.98] shadow-sm hover:shadow-md focus-visible:ring-[#107C41]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        style={style}
      >
        {IconLeft && <IconLeft className="w-4 h-4 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {IconRight && <IconRight className="w-4 h-4 shrink-0" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button className={combinedClasses} style={style} {...props}>
      {IconLeft && <IconLeft className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {IconRight && <IconRight className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </button>
  );
}
