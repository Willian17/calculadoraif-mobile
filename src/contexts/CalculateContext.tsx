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
    minValuePositiveResult: number;
    setMinValuePositiveResult: React.Dispatch<React.SetStateAction<number>>;
    currentScreen: string;
    setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
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
    const [minValuePositiveResult, setMinValuePositiveResult] = useState(0);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [currentScreen, setCurrentScreen] = useState('MinimumThirdAndFourthBimester');

    function setConfigScreen(title: string, subtitle: string) {
        setTitle(title);
        setSubtitle(subtitle);
    }

    return (
        <CalculateContext.Provider value={{
            showResult, setShowResult, result, setResult, setConfigScreen, title, subtitle, messageResult,
            setMessageResult, setMaxValuePositiveResult, maxValuePositiveResult, minValuePositiveResult, 
            setMinValuePositiveResult, currentScreen, setCurrentScreen
        }}>
            {children}
        </CalculateContext.Provider>
    )
}

export function useCalculate(): CalculateContextData {
    const context = useContext(CalculateContext);
    return context;
}