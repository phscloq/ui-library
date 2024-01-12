'use client'
import Pathway from "@/app/lib/components/pathway";
import { AccordionComponent, AccordionArrow, AccordionTriple } from "./accordion";
import { useState } from "react";
import CodePreview from "./components/code-preview";
import TabSwitch from "@/app/lib/components/tab-switch";
export default function Accordion(){
const [preview, setPreview] = useState(true)
    return (
        <div className={``}>
            
            <Pathway
                page="accordion"
            />
                    
            <h1 className="text-2xl mb-8">Accordion</h1>
            <div className="mb-8">
                <h4 className="mb-4">This is a single accordion component:</h4>
                <div className=" p-4 bg-gray-200 rounded-lg">
                    <AccordionComponent />
                </div>
            </div>
           <div className="mb-8">
            <h4 className="mb-4">Let &apos;s do again but this time with an arrow:</h4>
                <div className=" p-4 bg-gray-200 rounded-lg">
                    <AccordionArrow />
                </div>
           </div>
           <div className="mb-8">
            <h4 className="mb-4">Example:</h4>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                  {preview ? <AccordionTriple /> :  <CodePreview /> }  
                </div>
           </div>
           
    )
}