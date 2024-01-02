'use client'
import { useThemeContext } from "@/app/context";
export default function Carousel(){
    const {dark} = useThemeContext();

    return (
        <div className={`${dark ? 'bg-slate-600 text-stone-100': ''}`}>
           <div className="flex mb-4 gap-1">   
            <p className=" text-gray-400">docs  {'>'}  components {'>'}</p>
                      <p className="text-black">carousel</p>
            </div>
                    
            <h1 className="text-2xl mb-8">Carousel</h1> 
        </div>
    )
}
