'use client'
import Pathway from "@/app/lib/components/Pathway"
import Button from "./components/Button"
import CodePreview from "./components/CodePreview"
import { useState } from "react"

export default function Carousel(){
const [preview, setPreview] = useState(true)
    return (
        <div className="">
          <Pathway page="button"/>
                    
            <h1 className="text-2xl mb-8">Button</h1>
             <div>
             <div className="flex gap-4 text-slate-300 border-b border-slate-400 mb-2">
                    <button 
                    className={`${preview ? ' text-slate-200 border-b-2 border-slate-300' : ' text-slate-400'} px-2 py-1 `}
                    onClick={()=>setPreview(true)}>Preview</button>
                    <button 
                    className={`${!preview ? ' text-slate-200 border-b-2 border-slate-300' : ' text-slate-400'} px-2 py-1 `}
                    onClick={()=>setPreview(false)}>Code</button>
                </div>
             {preview ? <Button /> :  <CodePreview />}
             </div>
        </div>
    )
}
