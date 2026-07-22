// layout.jsx


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

    const [ots,sots]=useState([initFiles[0]]);

    const [contextFile,setContextFile]=useState(null);
    const [contextMenu,setContextMenu]=useState({
        visible:false,
        x:0,
        y:0
    })

    function handleNewFile(){

        let max=0;

        files.forEach((file)=>{
            if(file.name.startsWith("untitled"))
            {
                const num=Number(
                    file.name.replace("untitled","").replace(".txt","")
                )
                if(num > max){
                    max=num;
                }
            }
        })
        const newFile={
            name:`untitled${max+1}.txt`,
            content:""
        }
        setFiles([...files,newFile])
        sots([...ots,newFile])
        setSelectedFile(newFile)
    }

    function hidecm(){
        setContextMenu(
            {visible:false,
            x:0,
            y:0}
        )
    }

    function hrename(){
        const nn=prompt("Enter new file name");

        if(!nn)return;

        const updtFiles=files.map((file)=>{
            if(file.name==contextFile.name){
                return{
                    ...file,
                    name:nn
                }
            }
            return file;
        })
        setFiles(updtFiles);

        const updtots=ots.map((ot)=>{
            if(ot.name==contextFile.name){
                return {
                    ...ot,
                    name:nn
                }
            }
            return ot;
        })
        sots(updtots);

    }

    function hdelete(){

    }

    return(
        <div className="layout"   onClick={hidecm}>
            <div className="fe_sidebar left">
                <FileExplorer
                    files={files}
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                    ots={ots}
                    setots={sots}   //set open tabs
                    scf={setContextFile}
                    cf={contextFile}
                    scm={setContextMenu}
                    cm={contextMenu}
                    hrename={hrename}
                    hdel={hdelete}

                />
            </div>

            <div className="center">
                <div className="out-editor background">
                    <CodeEditor
                        files={files}
                        setfiles={setFiles}
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                        ots={ots}
                        setots={sots}
                        hnf={handleNewFile}
                        
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