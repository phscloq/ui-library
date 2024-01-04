'use client'
import { createContext, useEffect, useState } from 'react'
import { create } from './utils/cookies';

type ThemeContextType = {
    theme: string;
    handleThemeChange: (theme: string) => void;
};
type ThemeContextProviderProps = {
    children: React.ReactNode;
    value: string;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    handleThemeChange: () => {},
});
export function ThemeContextProvider({ children, value }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<string>(value ? value : 'light'); // Provide a default value for the theme state variable

    const handleThemeChange = (theme: string) => {
        setTheme(theme);
        create(theme);
    };

    useEffect(() => {// Check for system preferences
        const checkSystemPreferences = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                handleThemeChange('dark');
            } else {
                handleThemeChange('light');
            }
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
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
    
}
