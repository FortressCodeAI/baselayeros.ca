import React from "react";
import { VerdictBadge } from "./VerdictBadge";
import { AuditTrail } from "./AuditTrail";

type CaseResultCardProps = {
  caseResult: {
    name: string;
    expected: string;
    actual: string;
    ok: boolean;
    reason?: string | null;
    audit_trail: string[];
  };
};

export function CaseResultCard({ caseResult }: CaseResultCardProps) {
  const { name, expected, actual, ok, reason, audit_trail } = caseResult;

  return (
    <div className="bg-surface border border-border rounded-panel p-md shadow-panel space-y-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-textPrimary">{name}</h3>
        <VerdictBadge verdict={actual} />
      </div>

      <div className="text-xs text-textSecondary space-y-xs">
        <p>
          <span className="font-semibold">Expected:</span> {expected}
        </p>
        <p>
          <span className="font-semibold">Actual:</span>{" "}
          {actual} ({ok ? "OK" : "FAIL"})
        </p>
        {reason && (
          <p>
            <span className="font-semibold">Reason:</span> {reason}
          </p>
        )}
      </div>

      <AuditTrail trail={audit_trail} />
    </div>
  );
}
