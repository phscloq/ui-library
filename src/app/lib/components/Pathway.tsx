import { useContext } from "react"
import { ThemeContext } from "@/app/Theme-Context"

type Props = {page:string}
export default function Pathway({page}:Props){
   const {theme} = useContext(ThemeContext)

    return(
        <div className="flex mb-4 gap-1">   
            <p className=" text-gray-400">docs  {'>'}  components {'>'}</p>
            <p 
                className={`text-black 
                ${theme==='dark'? 'text-stone-100': ''}`}
                >
                {page}
                </p>
        </div>
    )
}