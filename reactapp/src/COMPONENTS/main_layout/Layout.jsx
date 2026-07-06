import CodeEditor from "../editor/Editor";
import FileExplorer from "../file_explorer/explorer";
import Chats from "../chat/chat";
import Console from "../console/console";

import "./layout.css";

export default function Layouts(){
    return(
        <div className="layout">
            <div className="fe_sidebar left">
                <FileExplorer/>
            </div>

            <div className="center">
                <div className="editor background">
                    <CodeEditor/>
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