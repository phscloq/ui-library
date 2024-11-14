'use client'
import { useContext} from "react"
import { MobileMenuContext } from "@/app/contexts";
export default function MobileMenuTriggerThreeDots(){
    const {openMobileNavMenu} = useContext(MobileMenuContext);
    return (
        <button className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600"
            onClick={openMobileNavMenu}
            >
            <span className=" sr-only">Navigation</span>
            &#10247;
        </button>
    )
}