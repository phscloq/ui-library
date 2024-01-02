'use client'
import React, { createContext, useContext } from "react";
import { useState } from "react";

interface ContextProps {
  dark: Boolean,
  handleTheme: ()=>void,  
}

export const ThemeContext = createContext<ContextProps>({
dark: false,
handleTheme:() => {}
})

export  function ThemeProvider({ children }:{children: React.ReactNode}) {
    const [dark, setDark] = useState(false);
    const handleTheme = () =>{
        setDark(!dark);
    }
    return <ThemeContext.Provider value={{dark, handleTheme}}>{children} </ThemeContext.Provider>
}

export function useThemeContext(){
  //wanted to try custom hooks and it works very well, 
  //i don't need to import both useContext and themeContext anymore
  //inside the components i use const {var} = useThemeContext()
  const context = useContext(ThemeContext)
  return context;
}

//Pages Array Context
//On going
//I'm gonna add a lot of pages
//Instead of manually creating a Link in left-navbar for every page
//I thought I will push the name of the page to the array
//and with the Links component it will create the Links for the pages
type PagesContext={
  pages: any[],
  setPages: React.Dispatch<React.SetStateAction<never[]>>

}
export const PagesContext = createContext<PagesContext | null>(null);
export function PagesProvider({children}:{children: React.ReactNode}){
  const [pages, setPages] = useState([]);
  return <PagesContext.Provider value={{pages, setPages}}>{children}</PagesContext.Provider>
}
