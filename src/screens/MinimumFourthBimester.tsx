import React, { useEffect, useState } from "react";
import { useCalculate } from "../contexts/CalculateContext";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";
import Template from "../shared/components/Template";
import { roundFloat } from "../shared/util/roundFloat";

export default function MinimumFourthBimester() {
    const [firstBimester, setFirstBimester] = useState<number | undefined | string>(undefined);
    const [secondBimester, setSecondBimester] = useState<number | undefined | string>(undefined);
    const [thirdBimester, setThirdBimester] = useState<number | undefined | string>(undefined);
    const { setShowResult, setResult, setConfigScreen, setMessageResult, setMaxValuePositiveResult, setMinValuePositiveResult } = useCalculate();

    useEffect(() => {
        setConfigScreen('Mínimo', 'para ser aprovado no 4° bimestre');
        setMaxValuePositiveResult(6);
        setMinValuePositiveResult(0);
    }, [])

    function handleCalculate() {
        setShowResult(true);
        const result = calculateMinimumFourthBimester(firstBimester as any, secondBimester as any, thirdBimester as any) as any;
        setMessageResult(result > 10 ? 'Você está de PF' :
            (result <= 0 ? 'Parabéns, você já está aprovado' : 'Para ser aprovado no 4° bimestre'));
        setResult(result < 0 ? 0 : result);
    }

    function calculateMinimumFourthBimester(gradeBimester1: number, gradeBimester2: number, gradeBimester3: number): number {
        const minimumTotal = 60;
        const weightBimester1And2 = 2;
        const weightBimester3 = 3;
        const result: number = (minimumTotal -
            ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2) + (+gradeBimester3 * weightBimester3))) / 3
        return roundFloat(result, -2);
    }

    return (
        <Template>
            <Input
                onChangeText={setFirstBimester}
                value={firstBimester}
                label="Média 1° Bimestre"
            />
            <Input
                onChangeText={setSecondBimester}
                value={secondBimester}
                label="Média 2° Bimestre"
            />
            <Input
                onChangeText={setThirdBimester}
                value={thirdBimester}
                label="Média 3° Bimestre"
            />
            <Button
                onPress={handleCalculate}
                label="Calcular"
            />
        </Template>
    )
}