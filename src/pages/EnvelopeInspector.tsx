import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function EnvelopeInspector() {
  const [path, setPath] = useState("");
  const [vector, setVector] = useState<any>(null);

  const load = () => {
    invoke("load_vector_cmd", { path }).then(setVector);
  };

  if (!vector)
    return (
      <div>
        <h1>Envelope Inspector</h1>
        <input value={path} onChange={e => setPath(e.target.value)} />
        <button onClick={load}>Load</button>
      </div>
    );

  return (
    <div>
      <h1>Envelope Inspector</h1>
      <pre>{JSON.stringify(vector.envelope, null, 2)}</pre>
    </div>
  );
}
