import React from "react";

type HeaderBarProps = {
  substrateVersion?: string;
  deterministic?: boolean;
  cageStatus?: "PASS" | "REFUSE" | "PARKED";
};

export function HeaderBar({
  substrateVersion = "v2.0.0",
  deterministic = true,
  cageStatus = "PASS",
}: HeaderBarProps) {
  return (
    <header className="h-14 bg-secondary border-b border-border flex items-center px-lg shadow-panel">
      <div className="flex-1 text-sm text-textSecondary">
        Substrate {substrateVersion} —{" "}
        {deterministic ? "Deterministic ✔" : "Non‑deterministic ⚠"}
      </div>
      <div className="text-accent font-medium text-sm">
        CAGE Parity: {cageStatus}
      </div>
    </header>
  );
}
