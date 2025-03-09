import React, { useState } from "react";
import { Copy, LoaderCircle, ClipboardCheck } from "lucide-react";

const FigmaFrameCopierButtonV2 = ({ frame }: { frame: string }) => {
  const [copyStatus, setCopyStatus] = useState("Copy Frame");

  const copyFigmaFrame = async () => {
    try {
      setCopyStatus("Copying");
      const htmlBlob = new Blob([frame], {
        type: "text/html",
      });
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": htmlBlob,
        }),
      ]);
      setCopyStatus("Copied!");
    } catch (error) {
      console.error("Error copying Figma frame:", error);
      setCopyStatus("Error");
    }
  };

  return (
    <button
      onClick={copyFigmaFrame}
      className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition flex items-center"
    >
      {copyStatus === "Copy Frame" && <Copy className="mr-2" />}
      {copyStatus === "Copying" && (
        <LoaderCircle className="mr-2 animate-spin" />
      )}
      {copyStatus === "Copied!" && <ClipboardCheck className="mr-2" />}
      {copyStatus}
    </button>
  );
};

export { FigmaFrameCopierButtonV2 };
