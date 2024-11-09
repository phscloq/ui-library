export default function CodePreview({children}:{children:React.ReactNode}){
    return (
        <div className=" 
        relative
       ">   
        
            <pre className=" rounded-md bg-slate-400  overflow-x-auto h-[400px]">
                <code className="text-black text-sm">
                    {children}
                </code>
            </pre>
            <button
            className="bg-slate-300 text-black px-2 py-1 
            rounded-md absolute top-2 right-9 " 
            onClick={() => navigator.clipboard.writeText(children?.toString() || '')}>
                Copy
            </button> 
        </div>
      );

}