export default function Badge({children}: {children: React.ReactNode}){
    return (
    <div className="w-full bg-slate-400 h-[400px] flex gap-2 justify-center items-center
        rounded-md">
        <span className="inline-block border bg-white dark:border-slate-800  dark:bg-slate-700 text-gray-800 dark:text-white text-xs 
        font-semibold rounded-full px-2 py-1 capitalize tracking-wide">
            {children}
        </span>
    </div>
    )

}