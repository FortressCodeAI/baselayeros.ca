import React from "react";

type AuditTrailProps = {
  trail: string[];
};

export function AuditTrail({ trail }: AuditTrailProps) {
  if (!trail || trail.length === 0) return null;

  return (
    <div className="bg-black/20 border border-border rounded-panel p-md text-xs text-textSecondary mt-md">
      <div className="font-semibold mb-xs">Audit Trail</div>
      <ul className="list-disc list-inside space-y-xs">
        {trail.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
