import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function SubstrateRun() {
  const [path, setPath] = useState("");
  const [result, setResult] = useState<any>(null);

  const run = () => {
    invoke("load_vector_cmd", { path })
      .then(v => invoke("run_substrate_cmd", { vector: v }))
      .then(setResult);
  };

  return (
    <div>
      <h1>Run Substrate</h1>
      <input value={path} onChange={e => setPath(e.target.value)} />
      <button onClick={run}>Run</button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
