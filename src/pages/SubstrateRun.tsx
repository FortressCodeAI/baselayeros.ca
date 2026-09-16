import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Panel } from "../components/Panel";
import { JSONViewer } from "../components/JSONViewer";
import { VerdictBadge } from "../components/VerdictBadge";
import { AuditTrail } from "../components/AuditTrail";

export default function SubstrateRun() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  const run = () => {
    const vector = JSON.parse(input);
    invoke("run_substrate_cmd", { vector }).then(setResult);
  };

  return (
    <Panel title="Substrate Execution">
      <textarea
        className="w-full h-40 bg-secondary p-md rounded-panel"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste envelope JSON here"
      />

      <button
        className="mt-md px-md py-sm bg-accent text-black rounded-button"
        onClick={run}
      >
        Execute Deterministically
      </button>

      {result && (
        <div className="mt-lg space-y-md">
          <VerdictBadge verdict={result.verdict} />
          <AuditTrail trail={result.audit_trail} />
          <JSONViewer data={result} />
        </div>
      )}
    </Panel>
  );
}
