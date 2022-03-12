import React from 'react';
import { CalculateProvider } from './CalculateContext';


interface IAppProviderProps {
    children: React.ReactNode
}

export default function AppProvider({ children }: IAppProviderProps) {
    console.log('AppProvider');
    return (
        <CalculateProvider>
            {children}
        </CalculateProvider>
    )
};
