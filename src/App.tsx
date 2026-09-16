import { useState } from "react";
import CageParity from "./pages/CageParity";
import VectorExplorer from "./pages/VectorExplorer";
import EnvelopeInspector from "./pages/EnvelopeInspector";
import SubstrateRun from "./pages/SubstrateRun";
import GovernancePacks from "./pages/GovernancePacks";
import { SidebarNav } from "./components/SidebarNav";
import { HeaderBar } from "./components/HeaderBar";

export default function App() {
  const [page, setPage] = useState("cage");

  return (
    <div className="flex h-screen bg-primary text-textPrimary">
      <SidebarNav current={page} onChange={setPage} />
      <main className="flex-1 flex flex-col">
        <HeaderBar />
        <section className="flex-1 overflow-auto p-xl space-y-lg">
          {page === "cage" && <CageParity />}
          {page === "vectors" && <VectorExplorer />}
          {page === "inspect" && <EnvelopeInspector />}
          {page === "run" && <SubstrateRun />}
          {page === "packs" && <GovernancePacks />}
        </section>
      </main>
    </div>
  );
}
