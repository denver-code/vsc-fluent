import { useState } from "react";
import { IFile } from "../types";
import { open } from "@tauri-apps/api/dialog";
import NavFiles from "./NavFiles";
import { readDirectory } from "../helpers/filesys";

export default function Sidebar() {
  const [projectName, setProjectName] = useState("");
  const [files, setFiles] = useState<IFile[]>([]);

  const loadFile = async () => {
    const selected = await open({
      directory: true
    })

    if (!selected) return;

    setProjectName(selected as string)
    readDirectory(selected + '/').then(files => {
      console.log(files)
      setFiles(files)
    })
  }

  return <aside id="sidebar" className="w-60 shrink-0 bg-sec ml-4 mt-4 mb-10 pb-10 mr-4 rounded-lg " style={{ height: 'calc(100vh - 80px)'}}>
    <div className="sidebar-header flex items-center justify-between p-4 py-2.5">
    
     <button className="project-explorer" onClick={loadFile} >
      {projectName ? <h1 className="text-white text-sm font-bold">{projectName.split('/').pop()?.toLocaleUpperCase()}</h1> : 'Open Folder'}
     </button>
      {/*
      <span className="project-name whitespace-nowrap text-gray-400 text-xs">{
        projectName.split('/').pop()
      }</span>   */}
    </div>
    <hr className="border-stone-600 mb-2" />
    <div className="code-structure">
      <NavFiles visible={true} files={files}/>
    </div>
  </aside>
}
