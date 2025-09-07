"use client";

import { useState } from "react";
import { FigmaFrameCopierButtonV2 } from "@/components/FigmaFrameCopierButtonV2";
import { figmaFrames } from "./_frames";

function Page() {
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      <h1>Frame</h1>
      <div className="group rounded aspect-square border border-gray-300 flex items-center justify-center bg-[url(/FigmaFrame1.png)] bg-contain bg-no-repeat bg-center">
        <div className="flex flex-col items-center justify-center hover:bg-gray-300/70 w-full h-full">
          <div className="hidden group-hover:flex">
            <FigmaFrameCopierButtonV2 frame={figmaFrames[0]} />
          </div>
        </div>
      </div>
      <div className="group rounded aspect-square border border-gray-300 flex items-center justify-center bg-[url(/FigmaFrame2.png)] bg-contain bg-no-repeat bg-center">
        <div className="flex flex-col items-center justify-center hover:bg-gray-300/70 w-full h-full">
          <div className="hidden group-hover:flex">
            <FigmaFrameCopierButtonV2 frame={figmaFrames[1]} />
          </div>
        </div>
      </div>
      <div className="group rounded aspect-square border border-gray-300 flex items-center justify-center bg-[url(/FigmaFrame3.png)] bg-contain bg-no-repeat bg-center">
        <div className="flex flex-col items-center justify-center hover:bg-gray-300/70 w-full h-full">
          <div className="hidden group-hover:flex">
            <FigmaFrameCopierButtonV2 frame={figmaFrames[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
