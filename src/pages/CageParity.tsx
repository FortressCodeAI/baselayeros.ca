import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function CageParity() {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    invoke("run_cage_parity_cmd").then(setReport);
  }, []);

  if (!report) return <p>Loading…</p>;

  return (
    <div>
      <h1>CAGE Parity Report</h1>
      <p>All OK: {report.all_ok ? "YES" : "NO"}</p>

      {report.cases.map((c: any) => (
        <div key={c.name} className="case-card">
          <h3>{c.name}</h3>
          <p>Expected: {c.expected}</p>
          <p>Actual: {c.actual}</p>
          <p>Status: {c.ok ? "OK" : "FAIL"}</p>
          {c.reason && <p>Reason: {c.reason}</p>}
        </div>
      ))}
    </div>
  );
}
