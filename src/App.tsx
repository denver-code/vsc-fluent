import Bottombar from "./components/Bottombar"
import CodeArea from "./components/CodeArea"
import SectionSidebar from "./components/SectionSidebar"
import Sidebar from "./components/Sidebar"
import Titlebar from "./components/Titlebar"
import { SourceProvider } from "./context/SourceContext"

export default function App() {

  return <div className="wrapper">
    <Titlebar />
    <div id="editor" className="h-screen flex items-start overflow-hidden bg-primary">
      <SourceProvider>
          <SectionSidebar />
          <Sidebar /> 
          <CodeArea />
        
      </SourceProvider>
    </div>
    <Bottombar />
  </div>
}


