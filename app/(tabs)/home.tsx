import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.greeting}>Good Morning 👋</Text>
        <Text style={styles.title}>Your Farms</Text>

        <TouchableOpacity style={styles.addFarm}>
          <Text style={styles.addFarmText}>Add Farm</Text>
        </TouchableOpacity>

        {/* Farm Card */}
        <View style={styles.card}>
          <Text style={styles.farmName}>Isaac Maize Farm</Text>
          <Text>Type: Crop Farm</Text>

          <View style={styles.row}>
            <Text>Expenses: UGX 200,000</Text>
            <Text>Sales: UGX 450,000</Text>
          </View>

          <Text style={styles.profit}>Profit: UGX 250,000</Text>

          <TouchableOpacity style={styles.openButton}>
            <Text style={styles.openText}>Open Farm</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <Text style={styles.section}>Quick Actions</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}>
            <Text>Add Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Text>Add Input</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Text>Record Sale</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Text>Reports</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  safeArea:{
    flex:1,
    backgroundColor:"#f5f5f5"
  },

  container:{
    padding:20
  },

  greeting:{
    fontSize:18
  },

  title:{
    fontSize:24,
    fontWeight:"bold",
    marginVertical:10
  },

  addFarm:{
    backgroundColor:"#2E7D32",
    padding:12,
    borderRadius:8,
    marginBottom:20
  },

  addFarmText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold"
  },

  card:{
    backgroundColor:"#fff",
    padding:15,
    borderRadius:10,
    marginBottom:20
  },

  farmName:{
    fontSize:18,
    fontWeight:"bold"
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10
  },

  profit:{
    color:"green",
    fontWeight:"bold"
  },

  openButton:{
    backgroundColor:"#4CAF50",
    padding:10,
    borderRadius:6,
    marginTop:10
  },

  openText:{
    color:"#fff",
    textAlign:"center"
  },

  section:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  },

  actions:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between"
  },

  actionBtn:{
    backgroundColor:"#fff",
    padding:15,
    borderRadius:10,
    width:"48%",
    marginBottom:10,
    alignItems:"center"
  }

})