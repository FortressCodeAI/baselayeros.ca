import React from "react";

type JSONViewerProps = {
  data: any;
};

export function JSONViewer({ data }: JSONViewerProps) {
  if (!data) return <p className="text-textSecondary text-sm">No data.</p>;

  return (
    <pre className="bg-primary border border-border rounded-panel p-md overflow-auto text-xs leading-relaxed">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
