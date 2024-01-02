'use client'
import { useThemeContext } from "@/app/context";
import { AccordionComponent, AccordionArrow, AccordionTriple } from "./accordion";
export default function Accordion(){
    const {dark} = useThemeContext();

    return (
        <div className={``}>
            <div className="flex mb-4 gap-1">   
            <p className=" text-gray-400">docs  {'>'}  components {'>'}</p>
                      <p className="text-black">accordion</p>
            </div>
                    
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
           <div className="">
            <h4 className="mb-4">And with three sections:</h4>
                <div className=" p-4 bg-gray-200 rounded-lg">
                    <AccordionTriple />
                </div>
           </div>
          
        </div>
    )
}