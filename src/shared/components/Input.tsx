import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';


interface IInputProps {
    onChangeText: React.Dispatch<React.SetStateAction<string | number | undefined>>;
    value: number | undefined | string;
    label: string;
    max?: number;
}

export default function Input({ value, onChangeText, label, max }: IInputProps) {
    const iconInput = <TextInput.Icon name="school" color="#69B99D" />

    function handleEndChangeText(text: string, callbackChange: React.Dispatch<React.SetStateAction<string | number | undefined>>) {
        if (!text) {
            return callbackChange(0)
        }
        const minValue = 0;
        const maxValue = max || 10;
        let value: string | number = text;
        value = value?.replace(',', '.')
        value = +value;
        value = (value > maxValue ?
            maxValue :
            (value < minValue ? minValue : value));
        callbackChange(value)
    }

    return (
        <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            onEndEditing={() => handleEndChangeText(value as string, onChangeText)}
            value={value?.toString()}
            label={label}
            mode="outlined"
            keyboardType="decimal-pad"
            left={iconInput}
            autoComplete
            theme={{ colors: { text: 'black', primary: '#69B99D' } }}
            outlineColor="transparent"
            maxLength={3}
        />
    )
}

const styles = StyleSheet.create({
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
});