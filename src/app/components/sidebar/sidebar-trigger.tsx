'use client';
import { MobileMenuContext } from "@/app/contexts";
import { useContext } from "react";

export default function SidebarTrigger(){
    const {sideBarOpen, handleLeftNavChange} = useContext(MobileMenuContext);

    return (
        <button className={`lg:hidden block bg-white dark:bg-slate-600 p-2 rounded-r-full fixed top-1/2 z-50
            ${sideBarOpen ? 'right-10' : 'left-0'}
            `}
            onClick={()=>handleLeftNavChange(!sideBarOpen)}
            >
            {sideBarOpen ? 'C' : 'O' } 
        </button>
    )
}