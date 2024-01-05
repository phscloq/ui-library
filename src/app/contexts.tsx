'use client'
import { createContext, useEffect, useState } from 'react'
import { create } from './utils/cookies';

type ThemeContextType = {
    theme: string;
    systemSelected: boolean;
    handleThemeChange: (theme: string) => void;
    handleSystemSelected: (e: string) => void;
};
type ThemeContextProviderProps = {
    children: React.ReactNode;
    value: string;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    systemSelected: false,
    handleThemeChange: () => {},
    handleSystemSelected: () => {},
});
export function ThemeContextProvider({ children, value }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<string>(value ? value : 'light'); // Provide a default value for the theme state variable
    const [systemSelected, setSystemSelected] = useState<boolean>(false); // Provide a default value for the theme state variable
    const handleThemeChange = (theme: string) => {
        setTheme(theme);
        create(theme);
    };

    const handleSystemSelected = (e: string) =>{
        if(e === 'system'){
            setSystemSelected(true);
        }else{
            setSystemSelected(false);
        }
    }

    useEffect(() => {// Check for system preferences
        const checkSystemPreferences = () => {
            if(systemSelected){
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                handleThemeChange('dark');
            } else {
                handleThemeChange('light');
            }}
        };

        checkSystemPreferences(); // Check on mount

        // Listen for changes in system preferences
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQueryList.addEventListener("change", (ev) => {
            checkSystemPreferences();
          }, false);
        // Cleanup listener on component unmount
        return () => {
            mediaQueryList.addEventListener("change", checkSystemPreferences);
        };
    }, []); 

    return (
        <ThemeContext.Provider value={{theme, systemSelected, handleSystemSelected, handleThemeChange}}>
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