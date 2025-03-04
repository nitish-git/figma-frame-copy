import React, { useState } from "react";
import { Copy } from "lucide-react";

const FigmaFrameCopier = ({
  fileKey = "",
  frameId = "",
}: {
  fileKey: string;
  frameId: string;
}) => {
  const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN as string;
  const [copyStatus, setCopyStatus] = useState("Copy Frame");

  const copyFigmaFrame = async () => {
    try {
      // Fetch frame details from Figma
      const response = await fetch(
        `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${frameId}`,
        {
          headers: {
            "X-Figma-Token": FIGMA_ACCESS_TOKEN,
          },
        }
      );

      const data = await response.json();
      //   const frameData = data.nodes[frameId];

      // Copy frame data to clipboard
      await navigator.clipboard.writeText(JSON.stringify(data));

      // Update button state
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy Frame"), 2000);
    } catch (error) {
      console.error("Error copying Figma frame:", error);
      setCopyStatus("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={copyFigmaFrame}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition flex items-center"
      >
        <Copy className="mr-2" />
        {copyStatus}
      </button>
    </div>
  );
};

export { FigmaFrameCopier };
