import Editor from "@monaco-editor/react";
import "./editor.css";
import "../main_layout/Layout.css";

export default function CodeEditor({files, selectedFile, setfiles, setSelectedFile,ots,setots}){

    function hcloseclk(e,tab){
        e.stopPropagation();

        const updttabs=ots.filter((t)=>{
            return t.name!==tab.name;
        })
        setots(updttabs);
    }


    function handleChange(value){
        const updatedFiles=files.map((file)=>{
            if(file.name=== selectedFile.name){
                return{
                    ...file,
                    content:value
                };
            }
            return file;
        });
        setfiles(updatedFiles);
    }   
    return(
        <div className="editor">
            
            <div className="tabs">
                {ots.map((tab)=>(
                    <div
                    className={
                        selectedFile.name===tab.name
                        ?"tab active-tab"
                        :"tab"
                    }
                    key={tab.name}
                    onClick={()=>setSelectedFile(tab)}
                    >
                        <span>{tab.name}</span>
                        <span className="closebtn" onClick={(e)=>{hcloseclk(e,tab)}}>x</span>
                    </div>
                ))}
            </div>

            <div className="editor-body">
                <Editor
                    height="50vh"
                    defaultLanguage="javascript"
                    value={selectedFile.content}
                    onChange={handleChange}
                    theme="vs-dark"

                />
            </div>
        </div>
    )
}