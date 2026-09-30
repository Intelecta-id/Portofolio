import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconRight?: LucideIcon;
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
      "bg-[#D97724] text-white hover:bg-[#BF6318] active:scale-[0.98] shadow-md hover:shadow-lg focus-visible:ring-[#D97724]",
    secondary:
      "bg-[#281E18] text-[#F7F3ED] hover:bg-[#3E2C22] active:scale-[0.98] shadow-md hover:shadow-lg focus-visible:ring-[#281E18]",
    outline:
      "border-2 border-[#281E18]/30 text-[#281E18] bg-transparent hover:border-[#281E18] hover:bg-[#281E18]/5 active:scale-[0.98] focus-visible:ring-[#281E18]",
    ghost:
      "text-[#281E18] bg-transparent hover:bg-[#281E18]/5 active:scale-[0.98] focus-visible:ring-[#281E18]",
  };

  const variantInlineStyles: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: "#D97724", color: "#FFFFFF" },
    secondary: { backgroundColor: "#281E18", color: "#F7F3ED" },
    outline: { color: "#281E18" },
    ghost: { color: "#281E18" },
  };

  const mergedStyles = {
    ...variantInlineStyles[variant],
    ...style,
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        style={mergedStyles}
      >
        {IconLeft && <IconLeft className="w-4 h-4 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {IconRight && <IconRight className="w-4 h-4 shrink-0" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button className={combinedClasses} style={mergedStyles} {...props}>
      {IconLeft && <IconLeft className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {IconRight && <IconRight className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </button>
  );
}
