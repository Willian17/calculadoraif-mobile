import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { roundFloat } from '../shared/roundFloat';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

export default function MinimumThirdAndFourthBimester() {
    const [firstBimester, setFirstBimester] = useState<number | undefined>(undefined);
    const [secondBimester, setSecondBimester] = useState<number | undefined>(undefined);
    const [result, setResult] = useState(undefined);
    const [message, setMessage] = useState(undefined);


    function handleCalculate() {
        const result = calculateMinimumThirdAndFourBimester(firstBimester as any, secondBimester as any) as any;
        setResult(result)
    }

    function calculateMinimumThirdAndFourBimester(gradeBimester1: number, gradeBimester2: number): number {
        const minimumTotal = 60;
        const weightBimester1And2 = 2;
        const result: number = (minimumTotal -
            ((+gradeBimester1 * weightBimester1And2) + (+gradeBimester2 * weightBimester1And2))) / 6
        return roundFloat(result, -2);
    }
    const element = <TextInput.Icon name="school" color="#69B99D" />
    return (
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
                onChangeText={(text) => setFirstBimester(+text)}
                value={firstBimester?.toString()}
                label="Média 1° Bimestre"
                mode="outlined"
                keyboardType="numeric"
                left={element}
                autoComplete
                theme={{colors: {text: 'black', primary: '#69B99D'}}}
                outlineColor="transparent"
                maxLength={2}
            />
            
            <TextInput
                style={styles.input}
                onChangeText={(text) => setSecondBimester(+text > 10 ? 10 : +text < 0 ? 0 : +text)}
                value={secondBimester?.toString()}
                label="Média 2° Bimestre"
                keyboardType="numeric"
                mode="outlined"
                left={element}
                autoComplete
                theme={{colors: {text: 'black', primary: '#69B99D'}}}
                outlineColor="transparent"

            />
            <TouchableOpacity style={styles.button} onPress={handleCalculate}>
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F5',
        alignItems: 'center',
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
