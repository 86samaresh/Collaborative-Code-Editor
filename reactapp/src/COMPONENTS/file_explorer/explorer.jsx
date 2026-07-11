import "./explorer.css";
import "../main_layout/Layout.css";




export default function FileExplorer({files,selectedFile,setSelectedFile}){

    
    return(
    <div className="file-explorer">
        <h4>File Explorer</h4>
        {
            files.map((file)=>(
                <div key={file.name} onClick={()=>setSelectedFile(file)}>
                    📄{file.name}
                </div>  
            ))
        }
    </div>
);
}