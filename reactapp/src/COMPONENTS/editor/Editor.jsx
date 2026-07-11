import Editor from "@monaco-editor/react";
import "./editor.css";
import "../main_layout/Layout.css";

export default function CodeEditor({selectedFile}){
    console.log("Selected File in CodeEditor:", selectedFile);
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
                    theme="vs-dark"

                />
            </div>
        </div>
    )
}