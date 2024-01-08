'use client'
import Pathway from "@/app/lib/components/Pathway"
import SwitchComponent from "./components/switch"

export default function Swith(){

    return (
        <div className="">
            <Pathway page="switch"/>
                    
            <h1 className="text-2xl mb-8">Switch</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <SwitchComponent />
            
        </div>
    )
}
