// editor.jsx

import Editor from "@monaco-editor/react";
import "./editor.css";
import "../main_layout/Layout.css";

export default function CodeEditor({files, selectedFile, setfiles, setSelectedFile,ots,setots,hnf}){

    function hcloseclk(e,tab){
        e.stopPropagation();
        let index=-1;
        const updttabs=ots.filter((t,i)=>{
            if(tab.name===t.name){
                index=i;
            }
            return t.name!==tab.name;
        })
        if(tab.name===selectedFile.name){
        setSelectedFile(updttabs[index] || updttabs[index-1] || null);}


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
{/* editor header ,,,,,tabs */}
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
                <div className="new-tabs" onClick={hnf}>
                    +
                </div>
            </div>

{/* editor body */}
            <div className="editor-body">
                {
                selectedFile?
                    <Editor
                        defaultLanguage="javascript"
                        value={selectedFile.content}
                        onChange={handleChange}
                        theme="vs-dark"

                    />
                :
                    <div className="emt-editor">
                        <h2>No file open</h2>
                        <p>Create a new file using the <strong>+</strong> button above or open a file
                            from the File Explorer on the left.</p>
                    </div>
                }
            </div>
        </div>
    )
}