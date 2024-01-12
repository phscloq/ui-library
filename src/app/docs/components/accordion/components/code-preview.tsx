export default function CodePreview() {
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
                INSERT LOGIC HERE!
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
    
    return (
      <div className="w-full bg-slate-400 h-[400px] p-4
      rounded-md overflow-auto relative
     ">
       <pre className=""><code className="text-black">{code}</code></pre>
       <button
       className="bg-slate-300 text-black px-2 py-1 
       rounded-md absolute top-2 right-9 " 
       onClick={() => navigator.clipboard.writeText(code)}>Copy</button> 
      </div>
    );
  }