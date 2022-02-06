import React, { Children, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../shared/components/Header';
import ResultCalculate from '../../shared/components/ResultCalculate';
import { useCalculate } from '../../contexts/CalculateContext';

interface ITemplateProps {
    children: React.ReactNode;
}

export default function Template({ children }: ITemplateProps) {
    const { showResult } = useCalculate();

    return (
        <>
            {showResult ?
                <ResultCalculate />
                :
                <View style={styles.container}>
                    <Header />
                    {children}
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
});
