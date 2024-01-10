'use client'
import Pathway from "@/app/lib/components/Pathway"
import Button from "./components/Button"
import CodePreview from "./components/CodePreview"
import { useState } from "react"
import TabSwitch from "@/app/lib/components/Tab-Switch"

export default function Carousel(){
const [preview, setPreview] = useState(true)
    return (
        <div className="">
          <Pathway page="button"/>
                    
            <h1 className="text-2xl mb-8">Button</h1>
             <div>
             <TabSwitch preview={preview} setPreview={setPreview} />

             {preview ? <Button /> :  <CodePreview />}
             </div>
        </div>
    )
}
