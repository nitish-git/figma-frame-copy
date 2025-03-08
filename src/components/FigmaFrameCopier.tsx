import React, { useState } from "react";
import { Copy, LoaderCircle, ClipboardCheck } from "lucide-react";
import { Loader } from "next/dynamic";

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
      setCopyStatus("Copying");
      // Fetch frame details from Figma
      const response = await fetch(
        `https://api.figma.com/v1/images/${fileKey}?ids=${frameId}&format=svg`,
        {
          headers: {
            "X-Figma-Token": FIGMA_ACCESS_TOKEN,
          },
        }
      );

      const data = await response.json();
      const imageURL = data.images[frameId];

      const response2 = await fetch(imageURL);
      const frameData = await response2.text();
      await navigator.clipboard.writeText(frameData);

      setCopyStatus("Copied!");
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
        {copyStatus === "Copy Frame" && <Copy className="mr-2" />}
        {copyStatus === "Copying" && (
          <LoaderCircle className="mr-2 animate-spin" />
        )}
        {copyStatus === "Copied!" && <ClipboardCheck className="mr-2" />}
        {copyStatus}
      </button>
    </div>
  );
};

export { FigmaFrameCopier };
