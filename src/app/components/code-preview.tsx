export default function CodePreview({children}:{children:React.ReactNode}){
    return (
        <div className="relative">  
            <pre className=" rounded-b-md bg-slate-700 dark:bg-slate-300 p-3  overflow-y-auto h-[400px]">
                <code className="text-white dark:text-black text-sm ">
                    {children}
                </code>
            </pre>
            <button
            className="bg-slate-300 dark:bg-slate-700 dark:text-white text-black px-2 py-1 
            rounded-md absolute top-2 right-9 " 
            onClick={() => navigator.clipboard.writeText(children?.toString() || '')}>
                Copy
            </button> 
        </div>
      );

}