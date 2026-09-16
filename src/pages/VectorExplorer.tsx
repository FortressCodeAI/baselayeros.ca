import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function VectorExplorer() {
  const [vectors, setVectors] = useState<string[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    invoke("list_vectors_cmd").then(setVectors);
  }, []);

  const load = (path: string) => {
    invoke("load_vector_cmd", { path }).then(setSelected);
  };

  return (
    <div>
      <h1>Vector Explorer</h1>

      <ul>
        {vectors.map(v => (
          <li key={v}>
            <button onClick={() => load(v)}>{v}</button>
          </li>
        ))}
      </ul>

      {selected && (
        <pre>{JSON.stringify(selected, null, 2)}</pre>
      )}
    </div>
  );
}
