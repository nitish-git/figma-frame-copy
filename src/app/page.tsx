"use client";

import { FigmaFrameCopier } from "@/components/FigmaFrameCopier";
import { useState } from "react";

export default function Home() {
  const [fileKey, setFileKey] = useState("");
  const [frameId, setFrameId] = useState("");
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">Figma Frame Copier</h1>
      <div className="flex flex-col items-center justify-center ">
        <input
          type="text"
          placeholder="Figma File Key"
          value={fileKey}
          onChange={(e) => setFileKey(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg mb-4"
          required
        />
        <input
          type="text"
          placeholder="Figma Frame ID"
          value={frameId}
          onChange={(e) => setFrameId(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg mb-4"
          required
        />
      </div>
      <FigmaFrameCopier fileKey={fileKey} frameId={frameId} />
      {/* <FigmaClipboardCopy /> */}
    </div>
  );
}
