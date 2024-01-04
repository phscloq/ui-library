"use client"
import { useContext } from "react";
import { ThemeContext } from "@/app/Theme-Context";
export default function ThemeToggle(){
    const {theme, handleThemeChange} = useContext(ThemeContext);
    
    return (
        <button onClick={()=>handleThemeChange(theme==='light' ? 'dark' : 'light')}>Lights</button>

    )
}
