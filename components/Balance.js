import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Balance() {
    return (
        <View style={styles.balanceContainer}>
            <View style={styles.balanceBox}>
                <View>
                    <Text style={styles.currentBalance}>Current Balance</Text>
                </View>
                <View>
                    <Text style={styles.amount}>$500.89</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    balanceContainer: {
        flex: 1,
        alignItems: 'center',
    },
    balanceBox: {
        width: 383,
        borderWidth: .6,
        borderColor: 'grey',
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    currentBalance: {
        fontSize: 14,
        fontFamily: "Inter_400Regular",
        marginBottom: 5
    },
    amount: {
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        color: "#00131E"
    }
})