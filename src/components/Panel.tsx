import React from "react";

type PanelProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Panel({ title, children, className }: PanelProps) {
  return (
    <div
      className={
        "bg-surface border border-border rounded-panel p-lg shadow-panel " +
        (className ?? "")
      }
    >
      {title && (
        <h2 className="text-xl font-semibold text-textPrimary mb-md">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
