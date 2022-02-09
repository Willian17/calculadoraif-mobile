import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useCalculate } from "../contexts/CalculateContext";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";
import Template from "../shared/components/Template";
import { roundFloat } from "../shared/util/roundFloat";

export default function MinimumThirdBimester() {
    const [firstBimester, setFirstBimester] = useState<number | undefined | string>(undefined);
    const [secondBimester, setSecondBimester] = useState<number | undefined | string>(undefined);
    const { setShowResult, setResult, setConfigScreen, setMessageResult, setMaxValuePositiveResult } = useCalculate();

    useEffect(() => {
        setConfigScreen('Mínimo', 'para ser aprovado no 3° bimestre');
        setMaxValuePositiveResult(6);
    }, [])

    function handleCalculate() {
        setShowResult(true);
        const result = calculateMinimumThirdBimester(firstBimester as any, secondBimester as any) as any;
        setMessageResult(result > 10 ? 'Não é possível ser aprovado no 3° bimestre': 'Para ser aprovado no 3° bimestre');
        setResult(result);
    }

    function calculateMinimumThirdBimester(gradeBimester1: number, gradeBimester2: number): number { 
        const minimumTotal = 60;
        const weightBimester1And2 = 2;
        const result: number = (minimumTotal - 
          ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2))) / 3
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
                <Button
                    onPress={handleCalculate}
                    label="Calcular"
                />
        </Template>
    )
}