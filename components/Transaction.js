import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Transaction({ data }) {
    return (
        <View style={{ marginTop: 15 }}>
            <View style={styles.transactionsWrapper}>
                <View>
                    <Text style={styles.name}>{data.trns_name}</Text>
                    <Text>{data.trns_location}</Text>
                </View>
                <View>
                    <Text>{data.trns_time}</Text>
                </View>
                <View>
                    <Text>${data.trns_amount}</Text>
                </View>
            </View>
            <View style={styles.line} />
        </View>
    )
}


const styles = StyleSheet.create({
    transactionsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    line: {
        borderBottomWidth: .4,
        borderBottomColor: "grey",
        marginTop: 8
    },
    name: {
        fontSize: 14,
        fontFamily: "Inter_500Medium",
        marginBottom: 5
    }
})