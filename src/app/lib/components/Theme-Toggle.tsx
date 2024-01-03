"use client"

import { useEffect, useState } from "react";
import { create, getThemeCookie } from "@/app/utils/cookies";
export default function ThemeToggle(){
    const [theme, setTheme] = useState<string>("");

    const handleThemeChange = (theme:string) => {
      setTheme(theme);
      create(theme);
    };
    
    return (
        <button onClick={()=>handleThemeChange(theme==='light' ? 'dark' : 'light')}>Lights</button>

    )
}
