'use client'
import { useState } from "react"
export  function AccordionComponent(){
    const [accordion, setAccordion] = useState(false);

return (
    <div className=" text-black">
                <button className="w-full flex justify-between" onClick={()=>{setAccordion(!accordion)}}>
                    <span>Section</span>
                    {accordion ? <span>-</span>:<span>+</span>}
                </button>
                <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          accordion
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad quasi eius cupiditate assumenda eaque numquam deleniti. Iusto autem quidem obcaecati alias dolor animi, eligendi aliquid eos dolorem voluptates maiores?</p>
      </div>
        </div>
)
}
export function AccordionArrow(){
    const [accordion, setAccordion] = useState(false);

    return (
        <div className="text-black">
                    <button className="w-full flex justify-between" onClick={()=>{setAccordion(!accordion)}}>
                        <span>Section</span>
                        {accordion ? <span className=" rotate-90">{'>'}</span>:<span className="rotate-90">{'<'}</span>}
                    </button>
                    <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
              accordion
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad quasi eius cupiditate assumenda eaque numquam deleniti. Iusto autem quidem obcaecati alias dolor animi, eligendi aliquid eos dolorem voluptates maiores?</p>
          </div>
            </div>
    ) 
}

export function AccordionTriple(){
    const [accordionArr, setAccordionArr] = useState([false, false , false]);
    const toggleAccordion = (index:number) => {
        const newAccordionArr = [...accordionArr];
        newAccordionArr[index] = !newAccordionArr[index];
        setAccordionArr(newAccordionArr);
    };
    return(
    <div className=" p-4 bg-gray-200 rounded-b-lg">
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
                className={`grid overflow-hidden transition-all 
                duration-300 ease-in-out text-slate-600  text-sm ${
                accordionArr[0]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                }`}
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
                className={`grid overflow-hidden transition-all duration-300 ease-in-out 
                text-slate-600  text-sm ${
                accordionArr[1]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
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
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out 
                  text-slate-600 text-sm ${
                  accordionArr[2]
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }`}
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
    )
}