import { useState } from "react";
import { IFile } from "../types";
import { open } from "@tauri-apps/api/dialog";
import NavFiles from "./NavFiles";
import { readDirectory } from "../helpers/filesys";

export default function SectionSidebar() {

  return <aside id="sidebar" className="w-15  bg-sec ml-4 mt-4 mb-10 pb-10rounded-lg " style={{ height: 'calc(100vh - 80px)'}}>
  
  </aside>
}
