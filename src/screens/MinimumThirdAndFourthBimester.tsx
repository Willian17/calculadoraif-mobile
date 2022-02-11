import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { roundFloat } from '../shared/util/roundFloat';
import Input from '../shared/components/Input';
import Button from '../shared/components/Button';
import Template from '../shared/components/Template';
import { useCalculate } from '../contexts/CalculateContext';
import { useRoute } from '@react-navigation/native';

export default function MinimumThirdAndFourthBimester() {
    const [firstBimester, setFirstBimester] = useState<number | undefined | string>(undefined);
    const [secondBimester, setSecondBimester] = useState<number | undefined | string>(undefined);
    const { setShowResult, setResult, setConfigScreen, setMessageResult, setMaxValuePositiveResult,
        setMinValuePositiveResult, currentScreen } = useCalculate();

    useEffect(() => {
        if (currentScreen === 'MinimumThirdAndFourthBimester') {
            setConfigScreen('Mínimo', 'para ser aprovado no 3° e 4° bimestre');
            setMaxValuePositiveResult(6);
            setMinValuePositiveResult(0);
        }
    }, [currentScreen])

    function handleCalculate() {
        setShowResult(true);
        const result = calculateMinimumThirdAndFourBimester(firstBimester as any, secondBimester as any) as any;
        setMessageResult('Para ser aprovado no 3° e 4° bimestre');
        setResult(result);
    }

    function calculateMinimumThirdAndFourBimester(gradeBimester1: number, gradeBimester2: number): number {
        const minimumTotal = 60;
        const weightBimester1And2 = 2;
        const result: number = (minimumTotal -
            ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2))) / 6
        return roundFloat(result, -2);
    }
    return (
        <>
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
        </>

    );
}

const styles = StyleSheet.create({

});
