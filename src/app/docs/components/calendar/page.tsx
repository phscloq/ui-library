'use client'
import { useThemeContext } from "@/app/context";
import { usePathname } from "next/navigation"

export default function Calendar(){
    const {dark} = useThemeContext();
    const pathname = usePathname();
    return (

        <div className={` ${dark ? 'bg-slate-600': ''}`}>
            <p className="text-white">{pathname}</p>
            <h1>Calendar</h1>
            <p className={`${dark ? ' text-red-500': 'text-blue-500'}`}>Tema</p>
            <div className=" bg-red-600 h-96"></div>
            <div className=" bg-blue-400 h-96"></div>
            <div className=" bg-green-600 h-96"></div>
            <div className=" bg-orange-400 h-96"></div>

        </div>
    )
}
