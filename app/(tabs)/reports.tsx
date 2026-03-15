import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Reports = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Title */}
        <Text style={styles.title}>Farm Reports 📊</Text>

        {/* Summary Cards */}
        <View style={styles.card}>
          <Text style={styles.label}>Total Expenses</Text>
          <Text style={styles.amount}>UGX 200,000</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Total Sales</Text>
          <Text style={styles.amount}>UGX 450,000</Text>
        </View>

        <View style={[styles.card, styles.profitCard]}>
          <Text style={styles.label}>Total Profit</Text>
          <Text style={styles.amount}>UGX 250,000</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Reports

const styles = StyleSheet.create({

  safeArea:{
    flex:1,
    backgroundColor:"#f5f5f5"
  },

  container:{
    padding:20
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },

  card:{
    backgroundColor:"#fff",
    padding:20,
    borderRadius:10,
    marginBottom:15,
    elevation:3
  },

  profitCard:{
    borderLeftWidth:5,
    borderLeftColor:"#2E7D32"
  },

  label:{
    fontSize:16,
    color:"gray",
    marginBottom:5
  },

  amount:{
    fontSize:20,
    fontWeight:"bold"
  }

})