"use client"
import { useContext } from "react";
import { ThemeContext } from "@/app/contexts";
export default function ThemeToggle(){
    const {theme, handleThemeChange} = useContext(ThemeContext);
    
    return (
/*         <button onClick={()=>handleThemeChange(theme==='light' ? 'dark' : 'light')}>Lights</button>
 */
        <label
            htmlFor="checkbox"
            className="bg-gray-100 relative w-20 h-8 rounded-full
             cursor-pointer
            "
        >
            <input
                id="checkbox" 
                type="checkbox"
                className="sr-only peer"
                checked={theme==='light' ? false : true}
                onChange={()=>handleThemeChange(theme==='light' ? 'dark' : 'light')}
                >
            </input>
            <span 
                className="w-2/6  h-4/5 bg-slate-400 absolute
                rounded-full left-1 top-1 peer-checked:bg-slate-700
                peer-checked:left-12
                transition-all duration-300
                "
                >
            </span>

        </label>
    )

}
