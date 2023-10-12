import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Transaction from './Transaction'
import { transactions } from '../db/data'

export default function Transactions() {
    return (
        <View style={styles.transactionsContainer}>
            <View>
                <Text style={styles.transactionsText}>Latest Transactions</Text>
            </View>
            <View style={styles.line} />
            {/* show all transactions history */}
            <View style={styles.allTransactions}>
                <FlatList
                    data={transactions} ß
                    renderItem={({ item }) => <Transaction data={item} />}
                    keyExtractor={trans => trans.id}
                    scr
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    transactionsContainer: {
        flex: 3,
    },
    line: {
        borderBottomWidth: .6,
        borderBottomColor: "grey",
        marginTop: 8
    },
    transactionsText: {
        fontSize: 14,
        color: '#00131E',
        fontFamily: "Inter_400Regular",
        marginLeft: 23
    },
    allTransactions: {
        marginTop: 10,
        paddingHorizontal: 23
    }
})