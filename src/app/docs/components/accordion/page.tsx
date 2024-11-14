'use client'
import Pathway from "@/app/components/pathway";
import { AccordionComponent, AccordionArrow, AccordionTriple } from "./accordion";
import { useState } from "react";
import TabSwitch from "@/app/components/tab-switch";
import CodePreview from "@/app/components/code-preview";
export default function Accordion(){
    const code = `
    const [accordionArr, setAccordionArr] = useState([false, false , false]);
    const toggleAccordion = (index:number) => {
        const newAccordionArr = [...accordionArr];
        newAccordionArr[index] = !newAccordionArr[index];
        setAccordionArr(newAccordionArr);
    };
    return(
    <div className=" p-4 bg-gray-200 rounded-lg">
        <div className="text-black">
            <div className=" mb-2 ">
                <button className="w-full flex  justify-between" 
                onClick={()=>{toggleAccordion(0)}}>
                    <span>Section 1</span>
                    {accordionArr[0] ? <span className=" rotate-90">{'>'}</span>
                    :
                    <span className="rotate-90">{'<'}</span>}
                </button>
                <div
                className={grid overflow-hidden transition-all 
                duration-300 ease-in-out text-slate-600  text-sm
                INSERT LOGIC HERE!
                accordionArr[0] 
                When TRUE: grid-rows-[1fr] opacity-100
                When FALSE: grid-rows-[0fr] opacity-0
                }
                >
                    <p className="overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis ad quasi eius cupiditate assumenda eaque numquam deleniti. 
                    Iusto autem quidem obcaecati alias dolor animi, eligendi aliquid 
                    eos dolorem voluptates maiores?
                    </p>
                </div>
            </div>


            <div className=" mb-2 " >
                <button className="w-full flex  justify-between" 
                onClick={()=>{toggleAccordion(1)}}>
                    <span>Section 2</span>
                    {accordionArr[1] ? 
                    <span className=" rotate-90">{'>'}</span>
                    :
                    <span className="rotate-90">{'<'}</span>}
                </button>
                <div
                className={grid overflow-hidden transition-all duration-300 ease-in-out 
                text-slate-600  text-sm
                //INSERT LOGIC HERE!
                accordionArr[1] 
                When TRUE: grid-rows-[1fr] opacity-100
                When FALSE: grid-rows-[0fr] opacity-0
                }
              >
                    <p className="overflow-hidden">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Officiis ad quasi eius cupiditate assumenda eaque numquam 
                      deleniti. Iusto autem quidem obcaecati alias dolor animi, 
                      eligendi aliquid eos dolorem voluptates maiores?
                    </p>
                </div>
            </div>


              <div className="mb-2 " >
                  <button className="w-full flex  justify-between" 
                  onClick={()=>{toggleAccordion(2)}}>
                      <span>Section 3</span>
                      {accordionArr[2] ? 
                      <span className=" rotate-90">{'>'}</span>
                      :
                      <span className="rotate-90">{'<'}</span>}
                  </button>
                  <div
                  className={grid overflow-hidden transition-all duration-300 ease-in-out 
                  text-slate-600 text-sm 
                  INSERT LOGIC HERE!
                  accordionArr[2] 
                  When TRUE: grid-rows-[1fr] opacity-100
                  When FALSE: grid-rows-[0fr] opacity-0}
                  >
                      <p className="overflow-hidden">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Officiis ad quasi eius cupiditate assumenda eaque numquam 
                        deleniti. Iusto autem quidem obcaecati alias dolor animi, 
                        eligendi aliquid eos dolorem voluptates maiores?
                      </p>
                  </div>
              </div>
        </div>
    </div>
    `;
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
                
                  {preview ? <AccordionTriple /> :  <CodePreview>{code}</CodePreview> }  
                </div>
           </div>
           
    )
}