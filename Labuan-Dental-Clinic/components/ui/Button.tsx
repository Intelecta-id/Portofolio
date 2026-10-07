import React from "react";
import { LucideIcon } from "lucide-react";

type IconComponent = LucideIcon | React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: IconComponent;
  iconRight?: IconComponent;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "whatsapp";
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
      "bg-[#2D6A5E] text-white hover:bg-[#1E4D44] active:scale-[0.98] shadow-xs hover:shadow-md focus-visible:ring-[#2D6A5E]",
    accent:
      "bg-[#E8A84C] text-[#1F2A28] hover:bg-[#D69438] active:scale-[0.98] shadow-xs hover:shadow-md focus-visible:ring-[#E8A84C]",
    secondary:
      "bg-[#FFFFFF] text-[#1F2A28] border border-[#E6E1D8] hover:bg-[#F3EFEA] hover:border-[#D6CFBF] active:scale-[0.98] shadow-xs focus-visible:ring-[#2D6A5E]",
    outline:
      "border border-[#2D6A5E] text-[#2D6A5E] bg-transparent hover:bg-[#EBF2F0] active:scale-[0.98] focus-visible:ring-[#2D6A5E]",
    ghost:
      "text-[#2D6A5E] bg-transparent hover:bg-[#EBF2F0] active:scale-[0.98] focus-visible:ring-[#2D6A5E]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BA5A] active:scale-[0.98] shadow-xs hover:shadow-md focus-visible:ring-[#25D366]",
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
