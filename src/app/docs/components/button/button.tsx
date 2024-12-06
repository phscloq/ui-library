import ComponentParent from "@/app/components/component-parent"

export default function Button(){
    return (
        <ComponentParent>
            <button
            className="bg-slate-200 dark:bg-slate-600 dark:text-white text-black px-3 py-1 rounded-md 
            hover:bg-slate-300  active:bg-slate-500 active:text-slate-100 dark:hover:bg-slate-700">
              Button
            </button>  
        </ComponentParent>    )
}