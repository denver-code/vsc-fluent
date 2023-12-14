import { useState } from "react";
import { appWindow } from "@tauri-apps/api/window";

export default function Titlebar() {
  const [isScaleup, setScaleup] = useState(false);
  const onMinimize = () => appWindow.minimize();
  const onScaleup = () => {
    appWindow.toggleMaximize();
    setScaleup(true);
  }

  const onScaledown = () => {
    appWindow.toggleMaximize();
    setScaleup(false);
  }

  const onClose = () => appWindow.close();

  return <div id="titlebar" data-tauri-drag-region>
    <div className="flex items-center gap-3 5 pl-2">
      <img src="/vscode.svg" style={{ width: 16 }} alt="" />
      <div className="flex items-center gap-3">
        <span className="text-sm">Visual Studio Code </span>
        <span className="text-gray-500 text-xs" >Fluent Reborn Edition</span>
      </div>
    </div>

    <div className="titlebar-actions">
      <i className="titlebar-icon ri-subtract-line" onClick={onMinimize}></i>

      {isScaleup ? <i className="titlebar-icon ri-file-copy-line" onClick={onScaledown}></i> : <i onClick={onScaleup} className="titlebar-icon ri-stop-line"></i>}

      <i id="ttb-close" className="titlebar-icon ri-close-fill" onClick={onClose}></i>
    </div>
  </div>
}
