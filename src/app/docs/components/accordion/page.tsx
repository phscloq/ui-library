'use client'
import Pathway from "@/app/lib/components/Pathway";
import { AccordionComponent, AccordionArrow, AccordionTriple } from "./accordion";
import { useState } from "react";
import CodePreview from "./components/CodePreview";
export default function Accordion(){
const [preview, setPreview] = useState(false)
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
                <div className="flex gap-4 text-slate-300 border-b border-slate-400 mb-2">
                    <button 
                    className={`${preview ? ' text-slate-200 border-b-2 border-slate-300' : ' text-slate-400'} px-2 py-1 `}
                    onClick={()=>setPreview(true)}>Preview</button>
                    <button 
                    className={`${!preview ? ' text-slate-200 border-b-2 border-slate-300' : ' text-slate-400'} px-2 py-1 `}
                    onClick={()=>setPreview(false)}>Code</button>
                </div>
                
                  {preview ? <AccordionTriple /> :  <CodePreview /> }  
                </div>
           </div>
           
    )
}