import React,{ createContext, useContext, useState } from "react";

interface CalculateContextData {
    showResult: boolean;
    setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
    result: number | undefined;
    setResult: React.Dispatch<React.SetStateAction<undefined>>;
    title: string;
    subtitle: string;
    setConfigScreen: (title: string, subtitle: string) => void;
}

interface ICalculateProviderProps { 
    children: React.ReactNode
}

const CalculateContext = createContext<CalculateContextData>({} as CalculateContextData);

export function CalculateProvider({ children }: ICalculateProviderProps) {
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(undefined);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    function setConfigScreen(title: string, subtitle: string) {
        setTitle(title);
        setSubtitle(subtitle);
    }

    return (
        <CalculateContext.Provider value={{showResult, setShowResult, result, setResult, setConfigScreen, title, subtitle}}>
            {children}
        </CalculateContext.Provider>
    )
}

export function useCalculate(): CalculateContextData {
    const context = useContext(CalculateContext);
    return context;
}