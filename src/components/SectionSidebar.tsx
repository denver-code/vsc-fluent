import { useState } from "react";
import { IFile } from "../types";
import { open } from "@tauri-apps/api/dialog";
import NavFiles from "./NavFiles";
import { readDirectory } from "../helpers/filesys";

export default function SectionSidebar() {

  return <aside id="sidebar" className="w-24 bg-sec ml-4 mt-4 mb-10 rounded-lg " style={{ height: 'calc(100vh - 140px)'}}>
    <div className="sidebar-header flex flex-col items-center justify-start p-4 gap-10 ">
      <button className="document" >
      <img src="document.svg" className="w-32"/>
      </button>
      <button className="document" >
      <img src="git.svg" className="w-32"/>
      </button>
    </div>
  </aside>
}
