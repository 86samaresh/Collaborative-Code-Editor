import React,{useState} from "react";

import CodeEditor from "../editor/Editor";
import FileExplorer from "../file_explorer/explorer";
import Chats from "../chat/chat";
import Console from "../console/console";

import "./layout.css";

const initFiles = [
    {
        name: "App.jsx",
        content: 'function App() {\n  return <h1>Hello, World!</h1>;\n}'
    },
    {
        name: "index.js",
        content: 'import React from "react";'
    },
    {
        name: "style.css",
        content: 'body {\n  background-color: #f0f0f0;\n}'
    },
    {
        name: "index.css",
        content: `body{
    margin:0;
    padding:0;
}`
    },
    {
        name: "package.json",
        content: `{
    "name":"project"
}`
    }
];

export default function Layouts(){
    const [files,setFiles]=useState(initFiles);
    const [selectedFile, setSelectedFile] = useState(initFiles[0]);
    return(
        <div className="layout">
            <div className="fe_sidebar left">
                <FileExplorer
                    files={files}
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                />
            </div>

            <div className="center">
                <div className="editor background">
                    <CodeEditor
                        files={files}
                        setfiles={setFiles}
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                    />
                </div>

                <div className="console bottom ">
                    <Console/>
                </div>
            </div>
            
            <div className="chats right">
                <Chats/>
            </div>
            
        </div>
    )
}