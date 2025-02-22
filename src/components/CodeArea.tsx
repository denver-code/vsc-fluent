import { IFile } from "../types"
import { useSource } from "../context/SourceContext"
import { getFileObject } from "../stores/file"
import FileIcon from "./FileIcon"
import useHorizontalScroll from "../helpers/useHorizontalScroll"
import PreviewImage from "./PreviewImage"
import CodeEditor from "./CodeEditor"

export default function CodeArea() {
  const { opened, selected, setSelect, delOpenedFile } = useSource()
  const scrollRef = useHorizontalScroll()
  const onSelectItem = (id: string) => {
    setSelect(id)
  }

  const isImage = (name: string) => {
    return ['.png', '.gif', '.jpeg', '.jpg', '.bmp'].some(ext => name.lastIndexOf(ext) !== -1) 
  }

  const close = (ev: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
    ev.stopPropagation()
    delOpenedFile(id)
  }

  return <div id="code-area" className="w-full h-full">
    {opened.length > 0 && <><div ref={scrollRef} className="code-tab-items flex items-center border-b border-stone-800 divide-x divide-stone-800 overflow-x-auto">
      {opened.map(item => {
        const file = getFileObject(item) as IFile
        const active = selected === item ? 'bg-darken text-gray-400' : ''

        return <div onClick={() => onSelectItem(file.id)} className={`tab-item shrink-0 px-3 py-1.5 text-gray-500 cursor-pointer hover:text-gray-400 flex items-center gap-2 ${active}`} key={item}>
          <FileIcon name={file.name} size="sm" />
          <span>{file.name}</span>
          <i onClick={(ev) => close(ev, item)} className="ri-close-line hover:text-red-400"></i>
        </div>
      })}
    </div><div className="code-contents">
        {opened.map(item => {
          const file = getFileObject(item) as IFile
          if (isImage(file.name)) {
            return <PreviewImage path={file.path} active={item === selected} />
          }

          return <CodeEditor key={item} id={item} active={item === selected} />

        })}
      </div></>}
    {
      opened.length === 0 && <div className="h-full flex-col flex items-start justify-start pt-32 ">
         <h1 className="text-white text-2xl font-bold">Visual Studio Code - Fluent Reborn Edition</h1>
         <h1 className="text-gray-500 text-xl">Editing Evolved</h1>
          <hr className="border-stone-600 my-4 w-11/12"/>
         <h1 className="text-white text-lg font-semibold">Start</h1>
         <h1 className="text-gray-500">No File Opened - please select file from sidebar.</h1>
      </div>
    }
  </div>
}
