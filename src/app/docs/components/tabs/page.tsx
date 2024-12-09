'use client'
import Pathway from "@/app/components/pathway"
import { useState } from "react"
import TabSwitch from "@/app/components/tab-switch"
import CodePreview from "@/app/components/code-preview"
import TabComponent from "./tabs"
import TabComponentDifferentStyle from "./tabs2"

export default function Tabs(){
const code = `<div className=" w-3/4">
                <div className="flex gap-4 flex-row text-slate-300 bg-slate-600   rounded-t-md relative ">
                <div className=" p-2 flex gap-4">
                    <button 
                    ref={el=>tabRefs.current[0] = el}
                    className="text-white dark:text-slate-400
                      //ADD CONDITIONAL STYLING HERE
                        transition-all  duration-200 ease-linear z-10 px-2 py-1"
                    onClick={()=>setPreview(true)}>Preview</button>
                    <button 
                    ref={el=>tabRefs.current[1] = el}
                    className=//Same as above, start the conditioning with !preview here. Both sides should have text-white dark:text white and text-slate-400 dark:text-slate-400
                    onClick={()=>setPreview(false)}>Code</button>
                <div
                className="absolute bottom-0 left-0    h-10 mb-2  bg-slate-500 transition-all duration-300 ease-out rounded-md"
                style={backgroundStyle}
                />
                </div>
            </div>
            <div className="w-full p-4 bg-white dark:bg-gray-800 rounded-b-lg shadow-md min-h-[200px]">
            
                <div className="//Add logic here. opacity-100 translate-y-0'  'opacity-0 translate-y-4 absolute'} transition-all duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Tab 1</h3>
                    <p>Example of tab1 text.</p>
                </div>
                <div className="//Add logic here. 'opacity-100 translate-y-0'  'opacity-0 translate-y-4 absolute' transition-all duration-300 ease-in-out ">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Tab 2</h3>
                    <p>Example of tab2 text.</p>
                </div>              

            </div>
        </div>`;

const codeTabs2 = `
<div className="flex gap-4 flex-row text-slate-300 bg-slate-600   rounded-t-md relative ">
                <div className=" p-2 flex gap-4">
                    <button 
                    ref={el=>tabRefs.current[0] = el}
                    className=" preview ? text-white dark:text-white ' : 'text-slate-400 dark:text-slate-400' transition-all  duration-200 ease-linear z-10 px-2 py-1 "
                    onClick={()=>setPreview(true)}>Preview</button>
                    <button 
                    ref={el=>tabRefs.current[1] = el}
                    className="" !preview ? 'text-white dark:text-white' : ' text-slate-400 dark:text-slate-400'}
                        dark:text-slate-200 transition-all duration-200 ease-linear z-10
                    px-2 py-1 "
                    onClick={()=>setPreview(false)}>Code</button>
                <div
                className="absolute bottom-0 left-0    h-2 mb-2  bg-slate-500 transition-all duration-300 ease-out rounded-md"
                style={backgroundStyle}
                />
                </div>
            </div>
`;

const [preview, setPreview] = useState(true)
    return (
        <div className="">
            <Pathway page="tabs"/>         
            <h1 className="text-2xl mb-8">Tabs</h1>
            <div className="flex gap-1 mb-4">
                <p className=" font-medium">Purpose:</p>
                <p>The Switch component is a versatile and user-friendly element designed to facilitate toggling between two states in your web applications.</p>    
            </div>
            <div>
                <TabSwitch preview={preview} setPreview={setPreview} />
                
                {preview ? <TabComponent /> :  <CodePreview>{code}</CodePreview>}
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4"> Another Style</h2>
                <TabComponentDifferentStyle />
                <h3 className="mt-6 font-medium text-lg ">How to Achieve?</h3>
                <div className=" bg-slate-700 dark:bg-slate-300 w-3/4 text-white dark:text-black px-3 py-1">
                    <p>You need to change the <span className=" text-blue-300 dark:text-blue-800 ">height</span> and that&apos;s it. </p>
                </div>
                
            </div>
            
            
        </div>
    )
}

