'use client'
import { createContext, useEffect, useState } from 'react'
import { create } from './utils/cookies';

type ThemeContextType = {
    theme: string;
    handleThemeChange: (theme: string) => void;
};
type ThemeContextProviderProps = {
    children: React.ReactNode;
    value?: string;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    handleThemeChange: () => {},
});
export function ThemeContextProvider({ children, value }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<string>(value ? value : 'light'); 
    
    useEffect(() => {// Check for system preferences
       
        // Listen for changes in system preferences
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQueryList.addEventListener("change", (ev) => {
            console.log("system theme check")
            checkSystemPreferences();
          }, false);
        // Cleanup listener on component unmount
        return () => {
            mediaQueryList.removeEventListener("change", checkSystemPreferences);
        };
    }, []); 
    
  

    
    
    const checkSystemPreferences = () => {
       
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            
                setTheme('dark');
                create('system')
            } else {
                setTheme('light');
                create('system')
            }
        

       
    };
    const handleThemeChange = (theme: string) => {
        if(theme !== 'system'){
            setTheme(theme);
            create(theme);
        }else if(theme === 'system'){
            checkSystemPreferences();
        }
    };

    
    

    

    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
    
}

// Mobil Menu Context
export const MobileMenuContext = createContext({
    mobileMenuOpen: false,
    leftNavOpen: false,
    handleMobileMenuChange: () => {},
    handleLeftNavChange: () => {},
});
export function MobileMenuContextProvider({ children }: {children:React.ReactNode}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [leftNavOpen, setLeftNavOpen] = useState(false);
    const handleMobileMenuChange = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const handleLeftNavChange = () => {
        setLeftNavOpen(!leftNavOpen);
    };
    return (
        <MobileMenuContext.Provider 
        value={{mobileMenuOpen, handleMobileMenuChange, leftNavOpen, handleLeftNavChange}}>
            {children}
        </MobileMenuContext.Provider>
    )
    
}