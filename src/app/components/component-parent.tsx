export default function ComponentParent({children, className}:{children: React.ReactNode, className?:string}){

    return (
        <div className={`w-full bg-slate-700 dark:bg-slate-300 h-[400px] 
    flex gap-2 justify-center items-center p-4 sm:p-0 rounded-b-md ${className}`}>
            {children}
        </div>
    )    

}