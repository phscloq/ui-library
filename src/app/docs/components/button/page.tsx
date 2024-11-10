'use client'
import Button from "./components/button"
import { useState } from "react"
import TabSwitch from "@/app/lib/components/tab-switch"
import Pathway from "@/app/lib/components/pathway"
import CodePreview from "@/app/lib/components/code-preview"

export default function ButtonPage(){
  const code = `
  <button
  className="bg-slate-200 text-black px-3 py-1 rounded-md 
  hover:bg-slate-300  active:bg-slate-500 active:text-slate-100
  "
  >
  Button
  </button> 
  `;
const [preview, setPreview] = useState(true)
    return (
        <div className="">
          <Pathway page="button"/>
                    
            <h1 className="text-2xl mb-8">Button</h1>
             <div>
             <TabSwitch preview={preview} setPreview={setPreview} />

             {preview ? <Button /> :  <CodePreview>{code}</CodePreview>}
             </div>
        </div>
    )
}
