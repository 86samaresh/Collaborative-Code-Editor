import "./explorer.css";
import "../main_layout/Layout.css";




export default function FileExplorer({files,selectedFile,setSelectedFile,ots,setots}){
    function handleClick(file){
        const exists = ots.some((tab)=>{
            return tab.name===file.name;
        })

        if(!exists){
            setots([...ots,file])
        }
        
        setSelectedFile(file)
    }
    
    return(
    <div className="file-explorer">
        <h4>File Explorer</h4>
        {
            files.map((file)=>(
                <div key={file.name} onClick={()=>handleClick(file)}>
                    📄{file.name}
                </div>  
            ))
        }
    </div>
);
}