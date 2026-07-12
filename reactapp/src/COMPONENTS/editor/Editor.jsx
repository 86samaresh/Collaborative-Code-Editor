import Editor from "@monaco-editor/react";
import "./editor.css";
import "../main_layout/Layout.css";

export default function CodeEditor({files, selectedFile, setfiles, setSelectedFile}){
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
            
            <div className="editor-header">
                <h2>Editor Header</h2>
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