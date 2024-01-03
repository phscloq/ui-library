'use client'
import { usePathname } from "next/navigation"

export default function Calendar(){
    const pathname = usePathname();
    return (

        <div className="">
            <p className="text-white">{pathname}</p>
            <h1>Calendar</h1>
            <p className="">Tema</p>
            <div className=" bg-red-600 h-96"></div>
            <div className=" bg-blue-400 h-96"></div>
            <div className=" bg-green-600 h-96"></div>
            <div className=" bg-orange-400 h-96"></div>

        </div>
    )
}
