'use client'
import Pathway from "@/app/lib/components/Pathway"
import CodePreview from "./components/CodePreview"
import { useContext, useState } from "react"
import SwitchComponent from "./components/switch"
import { ThemeContext } from "@/app/contexts"
import TabSwitch from "@/app/lib/components/Tab-Switch"

export default function Switch(){
const {theme} = useContext(ThemeContext);
const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="switch"/>
                    
            <h1 className="text-2xl mb-8">Switch</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <SwitchComponent /> :  <CodePreview />}
            </div>
            
            
        </div>
    )
}
