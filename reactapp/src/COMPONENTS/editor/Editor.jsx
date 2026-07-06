import Editor from "@monaco-editor/react";

export default function CodeEditor(){
    return(
        <div className="editor">
            
            <div className="editor-header">
                <h2>Editor Header</h2>
            </div>

            <div className="editor-body">
                <Editor
                    height="50vh"
                    defaultLanguage="javascript"
                    defaultValue="// code here"
                    theme="vs-dark"

                />
            </div>
        </div>
    )
}