import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { roundFloat } from '../shared/roundFloat';
import { Feather, EvilIcons } from '@expo/vector-icons';

export default function MinimumThirdAndFourthBimester() {
    const [firstBimester, setFirstBimester] = useState<number | undefined | string>(undefined);
    const [secondBimester, setSecondBimester] = useState<number | undefined | string>(undefined);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(undefined);


    function handleCalculate() {
        setShowResult(true);
        const result = calculateMinimumThirdAndFourBimester(firstBimester as any, secondBimester as any) as any;
        setResult(result)
    }

    function handleCloseResult() {
        setShowResult(false);
    }

    function handleEndChangeText(text: string, callbackChange: React.Dispatch<React.SetStateAction<string | number | undefined>>) {
        if(!text) {
            return callbackChange(0)
        }
        const min = 0;
        const max = 10;
        let value: string | number = text;
        value = value.replace(',', '.')
        value = +value;
        value = value > max ? max : value < min ? min : value;
        callbackChange(value)
    }

    function calculateMinimumThirdAndFourBimester(gradeBimester1: number, gradeBimester2: number): number {
        const minimumTotal = 60;
        const weightBimester1And2 = 2;
        const result: number = (minimumTotal -
            ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2))) / 6
        return roundFloat(result, -2);
    }
    const iconInput = <TextInput.Icon name="school" color="#69B99D" />
    return (
        <>
            {showResult ?
                <View style={styles.containerResult}>
                    <View style={styles.cardResult}>
                    <EvilIcons name="close" size={24} color="black" style={styles.iconCloseResult} onPress={handleCloseResult} />   
                        <Text style={result && result > 6 ? styles.resultRed : styles.resultGreen}> {result} </Text>
                        <Text style={styles.titleResult}>Mínimo</Text>
                        <Text style={styles.subtileResult}>Para ser aprovado no
                            3° e 4° bimestre</Text>
                        <TouchableOpacity style={styles.buttonResult} onPress={handleCloseResult}>
                            <Text style={styles.textButtonResult}>Calcular Novamente</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Feather style={styles.menu} name="menu" size={24} color="black" />
                        <View style={styles.headerTitles}>
                            <Text style={styles.title}>Calculadora<Text style={styles.titleGreen}>IF</Text></Text>
                            <Text style={styles.subtile}>Mínimo Para ser aprovado no 3° e 4° bimestre</Text>
                        </View>
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setFirstBimester(text)}
                        onEndEditing={(text) => handleEndChangeText(firstBimester as string, setFirstBimester)}
                        value={firstBimester?.toString()}
                        label="Média 1° Bimestre"
                        mode="outlined"
                        keyboardType="decimal-pad"
                        left={iconInput}
                        autoComplete
                        theme={{ colors: { text: 'black', primary: '#69B99D' } }}
                        outlineColor="transparent"
                        maxLength={3}
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setSecondBimester(text)}
                        onEndEditing={(text) => handleEndChangeText(secondBimester as string, setSecondBimester)}
                        value={secondBimester?.toString()}
                        label="Média 2° Bimestre"
                        keyboardType="number-pad"
                        mode="outlined"
                        left={iconInput}
                        autoComplete
                        theme={{ colors: { text: 'black', primary: '#69B99D' } }}
                        outlineColor="transparent"

                    />
                    <TouchableOpacity style={styles.button} onPress={handleCalculate}>
                        <Text style={styles.textButton}>Calcular</Text>
                    </TouchableOpacity>
                </View>
            }

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F5',
        alignItems: 'center',
    },
    containerResult: {
        flex: 1,
        backgroundColor: '#F0F0F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardResult: {
        backgroundColor: '#fff',
        width: '80%',
        alignItems: 'center',
        borderRadius: 5,
        paddingBottom: 30
    },
    iconCloseResult: {
        position: 'absolute',
        right: 15,
        top: 15
    },
    resultRed: {
        color: '#FF5C5C',
        fontSize: 90,
        fontFamily: 'inter-bold',
        textShadowColor: 'rgba(89, 101, 224, 0.3)',
        textShadowOffset: { width: 0, height: 5 },
        textShadowRadius: 20,
        marginTop: 20,
        marginBottom: -10
    },
    resultGreen: {
        color: '#69B99D',
        fontSize: 90,
        fontFamily: 'inter-bold',
        textShadowColor: 'rgba(89, 101, 224, 0.3)',
        textShadowOffset: { width: 0, height: 5 },
        textShadowRadius: 20,
        marginTop: 20,
        marginBottom: -10
    },
    titleResult: {
        color: '#2E384D',
        fontSize: 25,
        fontFamily: 'inter-semi-bold',
        marginBottom: -5
    },
    subtileResult: {
        color: '#666666',
        fontSize: 15,
        fontFamily: 'inter-regular',
        width: '50%',
        textAlign: 'center',
        marginBottom: -10
    },
    buttonResult: {
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 5,
        backgroundColor: '#CCF4E6',
        width: '80%'
    },
    textButtonResult: {
        fontSize: 15,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: '#0F241D',
        fontFamily: 'inter-semi-bold'
    },
    header: {
        backgroundColor: '#FAFAFA',
        width: '100%',
        height: 250,
        marginBottom: 30
    },
    headerTitles: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginTop: 20
    },
    menu: {
        position: 'absolute',
        left: 27,
        top: 45
    },
    title: {
        fontSize: 40,
        color: '#0F241D',
        fontFamily: 'raleway-bold',
    },
    titleGreen: {
        color: '#69B99D',
        fontWeight: 'bold',
        fontFamily: 'raleway-bold',
    },
    subtile: {
        fontSize: 18,
        color: '#666666',
        width: '64%',
        fontFamily: 'inter-regular'
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        marginTop: 25,
        borderRadius: 5,
        fontSize: 15,
        fontFamily: 'roboto-regular',
        borderBottomWidth: 0,
        borderBottomColor: '#fff'
    },
    button: {
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 1,
        backgroundColor: '#69B99D',
        width: '80%'
    },
    textButton: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});
