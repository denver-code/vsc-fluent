import { useState } from "react";
import { appWindow } from "@tauri-apps/api/window";

export default function Bottombar() {
 
  return <aside id="bottombar" className="bg-sec ml-4 mb-4 mr-4 rounded-lg " >
    <div className="flex items-center gap-3 5 pl-2">
      <div className="flex items-center gap-3">
        <span className="text-sm">Visual Studio Code </span>
        <span className="text-gray-500 text-xs" >Fluent Reborn Edition</span>
      </div>
    </div>
  </aside>
}
