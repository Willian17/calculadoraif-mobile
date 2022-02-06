import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useCalculate } from '../../contexts/CalculateContext';

export default function Header() {
    const { title, subtitle } = useCalculate();
    return (
        <View style={styles.header}>
            <Feather style={styles.menu} name="menu" size={24} color="black" />
            <View style={styles.headerTitles}>
                <Text style={styles.title}>Calculadora<Text style={styles.titleGreen}>IF</Text></Text>
                <Text style={styles.subtile}>{title} {subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
});