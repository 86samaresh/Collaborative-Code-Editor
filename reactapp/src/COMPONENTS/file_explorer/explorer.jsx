// explorer.jsx

import "./explorer.css";
import "../main_layout/Layout.css";





export default function FileExplorer({files,selectedFile,setSelectedFile,ots,setots,scf,cf,scm,cm,hrename,hdel}){
    function handleClick(file){
        const exists = ots.some((tab)=>{
            return tab.name===file.name;
        })

        if(!exists){
            setots([...ots,file])
        }
        
        setSelectedFile(file)
    }

    function handleCM(e,file){
        e.preventDefault();
        scf(file);
        
        scm({
            visible:true,
            x:e.clientX,
            y:e.clientY

        })
    }

    return(

    <div className="file-explorer">
        <h>File Explorer</h>
        {
            files.map((file)=>(
                <div key={file.name} onClick={()=>handleClick(file)} onContextMenu={(e)=>handleCM(e,file)}>
                    📄{file.name}
                </div>  
            ))
        }
        {
            cm.visible && (
                <div
                    style={{
                        position:"fixed",
                        left:cm.x,
                        top:cm.y,
                        background:"#252526",
                        border:"1px solid #555",
                        padding:"5px 0",
                        zIndex:1000
                    }}
                >
                    <div onClick={hrename}>Rename</div>
                    <div onClick={hdel}>Delete</div>
                </div>
            )
        }
    </div>
);
}