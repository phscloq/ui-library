'use client';
import { MobileMenuContext } from "@/app/contexts";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";

export default function SidebarTrigger(){
    const {sideBarOpen, handleLeftNavChange} = useContext(MobileMenuContext);

    return (
        <button className={`lg:hidden block text-black bg-slate-200 dark:bg-slate-600 p-2 rounded-r-full fixed top-1/2 z-30
            ${sideBarOpen ? '  left-[248px] dark:bg-slate-700' : 'left-0'}
            `}
            onClick={()=>handleLeftNavChange(!sideBarOpen)}
            >
                <ChevronRight className={`w-6 h-6 transition-transform ${sideBarOpen ? 'rotate-180':''}`} />
            </button>
    )
}