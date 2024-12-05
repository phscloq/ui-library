import ComponentParent from "@/app/components/component-parent";

export default function Badge({children}: {children: React.ReactNode}){
    return (
    <ComponentParent>
        <span className="inline-block border bg-white dark:border-slate-800  dark:bg-slate-700 text-gray-800 dark:text-white text-xs 
        font-semibold rounded-full px-2 py-1 capitalize tracking-wide">
            {children}
        </span>
    </ComponentParent>)

}