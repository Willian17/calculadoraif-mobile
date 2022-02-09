import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useCalculate } from '../../contexts/CalculateContext';

export default function ResultCalculate() {
    const { result, setShowResult, title, messageResult, maxValuePositiveResult, minValuePositiveResult } = useCalculate();

    function handleCloseResult() {
        setShowResult(false);
    }

    return (
        <View style={styles.containerResult}>
            <View style={styles.cardResult}>
                <EvilIcons name="close" size={24} color="black" style={styles.iconCloseResult} onPress={handleCloseResult} />
                <Text style={result && result <= maxValuePositiveResult && result >= minValuePositiveResult ? styles.resultGreen : styles.resultRed}> {result} </Text>
                <Text style={styles.titleResult}>{title}</Text>
                <Text style={styles.subtileResult}>{messageResult}</Text>
                <TouchableOpacity style={styles.buttonResult} onPress={handleCloseResult}>
                    <Text style={styles.textButtonResult}>Calcular Novamente</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
});