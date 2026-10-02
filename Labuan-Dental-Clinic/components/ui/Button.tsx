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
    "inline-flex items-center justify-center font-bold rounded-xl transition-spring focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-bold",
  };

  const variantStyles = {
    primary:
      "bg-[#0B7F8C] text-white hover:bg-[#075E68] active:scale-[0.98] shadow-md hover:shadow-lg focus-visible:ring-[#0B7F8C]",
    secondary:
      "bg-[#0A2230] text-[#FFFFFF] hover:bg-[#1D3546] active:scale-[0.98] shadow-md hover:shadow-lg focus-visible:ring-[#0A2230]",
    outline:
      "border-2 border-[#0B7F8C]/30 text-[#075E68] bg-transparent hover:border-[#0B7F8C] hover:bg-[#E1F4F6] active:scale-[0.98] focus-visible:ring-[#0B7F8C]",
    ghost:
      "text-[#075E68] bg-transparent hover:bg-[#E1F4F6] active:scale-[0.98] focus-visible:ring-[#0B7F8C]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1EBE5D] active:scale-[0.98] shadow-md hover:shadow-lg focus-visible:ring-[#25D366]",
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
