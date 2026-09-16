import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Panel } from "../components/Panel";

type Pack = {
  id: string;
  name: string;
  domain: string;
  version: string;
};

export default function GovernancePacks() {
  const [packs, setPacks] = useState<Pack[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    invoke<Pack[]>("list_governance_packs_cmd").then(setPacks);
    invoke<string | null>("get_active_governance_pack_cmd").then(setActive);
  }, []);

  const setActivePack = (id: string) => {
    invoke<boolean>("set_active_governance_pack_cmd", { id }).then(ok => {
      if (ok) setActive(id);
    });
  };

  return (
    <Panel title="Governance Packs">
      <ul className="space-y-sm">
        {packs.map(p => (
          <li key={p.id} className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">{p.name}</div>
              <div className="text-xs text-textSecondary">
                Domain: {p.domain} — v{p.version}
              </div>
            </div>
            <button
              className={
                "px-md py-xs rounded-button text-xs " +
                (active === p.id
                  ? "bg-accent text-black"
                  : "bg-secondary text-textPrimary hover:shadow-hover")
              }
              onClick={() => setActivePack(p.id)}
            >
              {active === p.id ? "Active" : "Set Active"}
            </button>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
