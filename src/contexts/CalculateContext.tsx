import React, { createContext, useContext, useState } from "react";

interface CalculateContextData {
    showResult: boolean;
    setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
    result: number | undefined;
    setResult: React.Dispatch<React.SetStateAction<undefined>>;
    title: string;
    subtitle: string;
    setConfigScreen: (title: string, subtitle: string) => void;
    messageResult: string;
    setMessageResult: React.Dispatch<React.SetStateAction<string>>;
    maxValuePositiveResult: number;
    setMaxValuePositiveResult: React.Dispatch<React.SetStateAction<number>>;
}

interface ICalculateProviderProps {
    children: React.ReactNode
}

const CalculateContext = createContext<CalculateContextData>({} as CalculateContextData);

export function CalculateProvider({ children }: ICalculateProviderProps) {
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(undefined);
    const [messageResult, setMessageResult] = useState('');
    const [maxValuePositiveResult, setMaxValuePositiveResult] = useState(6);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    function setConfigScreen(title: string, subtitle: string) {
        setTitle(title);
        setSubtitle(subtitle);
    }

    return (
        <CalculateContext.Provider value={{
            showResult, setShowResult, result, setResult, setConfigScreen, title, subtitle, messageResult,
            setMessageResult, setMaxValuePositiveResult, maxValuePositiveResult
        }}>
            {children}
        </CalculateContext.Provider>
    )
}

export function useCalculate(): CalculateContextData {
    const context = useContext(CalculateContext);
    return context;
}