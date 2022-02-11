import React, { useEffect, useState } from "react";
import { useCalculate } from "../contexts/CalculateContext";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";
import Template from "../shared/components/Template";
import { roundFloat } from "../shared/util/roundFloat";

export default function MinimumPF() {
    const [generalAverage, setGeneralAverage] = useState<number | undefined | string>(undefined);
    const { setShowResult, setResult, setConfigScreen, setMessageResult, setMaxValuePositiveResult, 
        setMinValuePositiveResult, currentScreen} = useCalculate();

    useEffect(() => {
        if(currentScreen === 'MinimumPF') {
            setConfigScreen('Mínimo', 'na PF');
            setMaxValuePositiveResult(6);
            setMinValuePositiveResult(0);
        }
    }, [currentScreen])

    function handleCalculate() {
        setShowResult(true);
        const result = calculateMinimumFromPF(generalAverage as any) as any;
        setMessageResult(result <= 4 ? 'Você não precisa fazer PF, já está aprovado!' : 'Para ser aprovado na PF');
        setResult(result);
    }

    function calculateMinimumFromPF(generalAverage: number): number {
        const endAverage = 10;
        const result: number = endAverage - +generalAverage
        return roundFloat(result, -2);
    }


    return (
        <Template>
            <Input
                onChangeText={setGeneralAverage}
                value={generalAverage}
                label="Média geral"
            />
            <Button
                onPress={handleCalculate}
                label="Calcular"
            />
        </Template>
    )
}