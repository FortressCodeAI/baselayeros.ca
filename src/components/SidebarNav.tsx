import React from "react";

type SidebarNavProps = {
  current: string;
  onChange: (page: string) => void;
};

const items = [
  { id: "dashboard", label: "Dashboard" },
  { id: "cage", label: "CAGE Parity" },
  { id: "vectors", label: "Vectors" },
  { id: "inspect", label: "Envelope Inspector" },
  { id: "run", label: "Substrate Execution" },
  { id: "packs", label: "Governance Packs" },
  { id: "attest", label: "Attestations" },
];

export function SidebarNav({ current, onChange }: SidebarNavProps) {
  return (
    <aside className="w-64 bg-surface border-r border-border shadow-panel flex flex-col">
      <div className="p-lg text-accent font-bold text-xl tracking-wide">
        BaseLayerOS
      </div>
      <nav className="flex-1 p-md space-y-sm">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={
              "w-full text-left px-md py-sm rounded-button " +
              (current === item.id
                ? "bg-border text-textPrimary"
                : "bg-secondary text-textSecondary hover:shadow-hover")
            }
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
