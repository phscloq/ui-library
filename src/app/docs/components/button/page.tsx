'use client'
import Button from "./button"
import { useState } from "react"
import TabSwitch from "@/app/components/tab-switch"
import Pathway from "@/app/components/pathway"
import { CodeBlock } from "@/app/components/code-block"

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

             {preview ? <Button /> :  <CodeBlock code={code} language="tsx" filename="button.tsx"/>}
             </div>
        </div>
    )
}
