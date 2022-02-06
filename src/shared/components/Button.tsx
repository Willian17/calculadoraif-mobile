import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons';

interface IButtonProps {
    onPress: () => void;
    label: string;
}
export default function Button({ onPress, label }: IButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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