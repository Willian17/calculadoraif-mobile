import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function MinimumThirdAndFourthBimester() {
    const [firstBimester, setFirstBimester] = useState(undefined);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora<Text style={styles.titleGreen}>IF</Text></Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setFirstBimester(text as any)}
                value={firstBimester}
                placeholder="1° Bimestre"
                keyboardType="numeric"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#0F241D'
    },
    titleGreen: {
        color: '#69B99D',
        fontWeight: 'bold',
    },
    input: {
        width: '90%',
        borderColor: '#eeeeee',
        borderWidth: 1,
        backgroundColor: '#f6f6f6',
        padding: 15,
        marginTop: 25,
        borderRadius: 5
    }
});
