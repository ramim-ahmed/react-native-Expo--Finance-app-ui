import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View style={styles.CardContainer}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.bankTitle}>Bank</Text>
                </View>
                <View style={styles.numberContainer}>
                    <View style={styles.number} />
                    <View style={styles.number} />
                    <View style={styles.number} />
                    <View>
                        <Text style={styles.lastDigit}>1763</Text>
                    </View>
                </View>
                <View style={styles.expiredContainer}>
                    <View style={styles.expiredNumber} />
                    <View>
                        <Text style={styles.splashText}>/</Text>
                    </View>
                    <View style={styles.expiredNumber} />
                </View>
                <View style={styles.visaContainer}>
                    <Text style={styles.visaText}>VISA</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    CardContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        width: 383,
        height: 179,
        backgroundColor: "#00131E",
        padding: 30,
        borderRadius: 10
    },
    bankTitle: {
        fontSize: 20,
        fontFamily: "Inter_700Bold",
        color: "#fff"
    },
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    number: {
        width: 57,
        height: 19,
        backgroundColor: "grey",
        marginRight: 20
    },
    lastDigit: {
        fontSize: 20,
        color: "grey",
    },
    expiredContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    splashText: {
        color: "grey",
        fontSize: 20,
        fontFamily: 'Inter_400Regular',
        marginHorizontal: 5
    },
    expiredNumber: {
        width: 38,
        height: 19,
        backgroundColor: "grey",
    },
    visaContainer: {
        marginTop: 1,
        alignItems: 'flex-end',
    },
    visaText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Inter_700Bold"
    }
})