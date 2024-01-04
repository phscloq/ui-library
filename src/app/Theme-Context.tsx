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
    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
    
}
