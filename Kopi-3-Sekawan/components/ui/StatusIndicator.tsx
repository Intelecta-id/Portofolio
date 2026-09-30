import React from "react";
import { CheckCircle2, Clock, AlertCircle, HelpCircle } from "lucide-react";

interface StatusIndicatorProps {
  statusType: "verified" | "strong-indication" | "indication" | "unconfirmed";
  label: string;
}

export default function StatusIndicator({
  statusType,
  label,
}: StatusIndicatorProps) {
  const configs = {
    verified: {
      icon: CheckCircle2,
      styles: "bg-sage/10 text-sage border-sage/30",
    },
    "strong-indication": {
      icon: AlertCircle,
      styles: "bg-crema/10 text-crema border-crema/30",
    },
    indication: {
      icon: Clock,
      styles: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    },
    unconfirmed: {
      icon: HelpCircle,
      styles: "bg-gray-500/10 text-gray-600 border-gray-400/30",
    },
  };

  const current = configs[statusType] || configs.unconfirmed;
  const Icon = current.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border ${current.styles}`}
    >
      <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
