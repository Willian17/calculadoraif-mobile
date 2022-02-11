import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { roundFloat } from '../shared/util/roundFloat';
import Input from '../shared/components/Input';
import Button from '../shared/components/Button';
import Template from '../shared/components/Template';
import { useCalculate } from '../contexts/CalculateContext';
import { useRoute,  } from '@react-navigation/native';

export default function GeneralAverage() {
    const [firstBimester, setFirstBimester] = useState<number | undefined | string>(undefined);
    const [secondBimester, setSecondBimester] = useState<number | undefined | string>(undefined);
    const [thirdBimester, setThirdBimester] = useState<number | undefined | string>(undefined);
    const [fourthBimester, setFourthBimester] = useState<number | undefined | string>(undefined);
    const { setShowResult, setResult, setConfigScreen, setMessageResult, setMaxValuePositiveResult, 
        setMinValuePositiveResult, currentScreen } = useCalculate();

    useEffect(() => {
        if(currentScreen === 'AverageGeneral') {
            setConfigScreen('Média', 'geral');
            setMaxValuePositiveResult(10);
            setMinValuePositiveResult(6);
        }
    }, [currentScreen])

    function handleCalculate() {
        setShowResult(true);
        const result = calculateGeneralAverage(firstBimester as any, secondBimester as any, 
            thirdBimester as any, fourthBimester as any) as any;
        setMessageResult(result >= 6 ? 'Parabéns você está aprovado!' : 'Infelizmente você está de PF!');
        setResult(result);
    }

    function calculateGeneralAverage(gradeBimester1: number, gradeBimester2: number, gradeBimester3: number, gradeBimester4: number): number {
        const weightBimester1And2 = 2;
        const weightBimester3And4 = 3;
        const generalAverage: number = ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2) + 
        (+gradeBimester3 * weightBimester3And4) + (+gradeBimester4 * weightBimester3And4)) / 10;
        return roundFloat(generalAverage, -2);
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
                <Input
                    onChangeText={setThirdBimester}
                    value={thirdBimester}
                    label="Média 3° Bimestre"
                />
                <Input
                    onChangeText={setFourthBimester}
                    value={fourthBimester}
                    label="Média 4° Bimestre"
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
