import React, { useEffect, useState } from "react";
import { useCalculate } from "../contexts/CalculateContext";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";
import Template from "../shared/components/Template";
import { roundFloat } from "../shared/util/roundFloat";

export default function EndAverage() {
    const [generalAverage, setGeneralAverage] = useState<number | undefined | string>(undefined);
    const [gradePF, setGradePF] = useState<number | undefined | string>(undefined);
    const { setShowResult, setResult, setConfigScreen, setMessageResult, setMaxValuePositiveResult, setMinValuePositiveResult } = useCalculate();

    useEffect(() => {
        setConfigScreen('Média', 'final');
        setMaxValuePositiveResult(10);
        setMinValuePositiveResult(5);
    }, [])

    function handleCalculate() {
        setShowResult(true);
        const result = calculateEndAverage(generalAverage as any, gradePF as any) as any;
        setMessageResult(result >= 5 ? 'Parabéns, você está aprovado!' : 'Infelizmente você está reprovado!');
        setResult(result);
    }

    function calculateEndAverage(generalAverage: number, pf: number): number {
        const endAverage: number = (+generalAverage + +pf) / 2;
        console.log((generalAverage + pf));
        return roundFloat(endAverage, -2)
    }


    return (
        <Template>
            <Input
                onChangeText={setGeneralAverage}
                value={generalAverage}
                label="Média geral"
            />
            <Input
                onChangeText={setGradePF}
                value={gradePF}
                label="Nota na PF"
            />
            <Button
                onPress={handleCalculate}
                label="Calcular"
            />
        </Template>
    )
}