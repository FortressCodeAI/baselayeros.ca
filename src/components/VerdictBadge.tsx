import React from "react";

type VerdictBadgeProps = {
  verdict: "Allow" | "Refuse" | string;
};

export function VerdictBadge({ verdict }: VerdictBadgeProps) {
  const isAllow = verdict.toLowerCase() === "allow";
  const isRefuse = verdict.toLowerCase() === "refuse";

  const base =
    "inline-flex items-center px-sm py-xs rounded-button text-xs font-semibold border ";

  const cls = isAllow
    ? base + "bg-success/20 text-success border-success/40"
    : isRefuse
    ? base + "bg-danger/20 text-danger border-danger/40"
    : base + "bg-warning/20 text-warning border-warning/40";

  return <span className={cls}>{verdict}</span>;
}
