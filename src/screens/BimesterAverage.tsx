import React, { useEffect, useState } from "react";
import { useCalculate } from "../contexts/CalculateContext";
import Button from "../shared/components/Button";
import Input from "../shared/components/Input";
import Template from "../shared/components/Template";
import { roundFloat } from "../shared/util/roundFloat";

export default function BimesterAverage() {
    const [grade1, setGrade1] = useState<number | undefined | string>(undefined);
    const [grade2, setGrade2] = useState<number | undefined | string>(undefined);
    const [grade3, setGrade3] = useState<number | undefined | string>(undefined);
    const [atitudinal, setAtitudinal] = useState<number | undefined | string>(undefined);
    const { setShowResult, setResult, setConfigScreen, setMessageResult, setMaxValuePositiveResult, setMinValuePositiveResult } = useCalculate();

    useEffect(() => {
        setConfigScreen('Média', 'no bimestre');
        setMaxValuePositiveResult(10);
        setMinValuePositiveResult(6);
    }, [])

    function handleCalculate() {
        setShowResult(true);
        const result = calculateAvarageBimester(grade1 as any, grade2 as any, grade3 as any, atitudinal as any) as any;
        setMessageResult('No bimestre');
        setResult(result);
    }

    function calculateAvarageBimester(grade1: number, grade2: number, grade3: number | undefined, attitudinal: number): number {
        const sizeGradeAvarage = 0.8;
        const avarageBimester: number = !grade3 ?
            (((+grade1 + +grade2) / 2) * sizeGradeAvarage) + +attitudinal :
            (((+grade1 + +grade2 + +grade3) / 3) * sizeGradeAvarage) + +attitudinal
        return +avarageBimester.toFixed(2);
    }


    return (
        <Template>
            <Input
                onChangeText={setGrade1}
                value={grade1}
                label="Nota 1"
            />
            <Input
                onChangeText={setGrade2}
                value={grade2}
                label="Nota 2"
            />
            <Input
                onChangeText={setGrade3}
                value={grade3}
                label="Nota 3"
            />
            <Input
                onChangeText={setAtitudinal}
                max={2}
                value={atitudinal}
                label="Atitudinal"
            />
            <Button
                onPress={handleCalculate}
                label="Calcular"
            />
        </Template>
    )
}