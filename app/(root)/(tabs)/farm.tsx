import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const Farm = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <Text style={styles.title}>My Farms 🌱</Text>

        {/* Add Farm Button */}
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#fff" />
          <Text style={styles.addText}> Add New Farm</Text>
        </TouchableOpacity>

        {/* Farm Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="leaf-outline" size={24} color="#2E7D32" />
            <Text style={styles.farmName}>Isaac Maize Farm</Text>
          </View>

          <Text style={styles.type}>Type: Crop Farm</Text>
          <Text>Location: Kampala</Text>
          <Text>Size: 2 Acres</Text>

          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewText}>View Details</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Farm

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

  addButton:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#2E7D32",
    padding:12,
    borderRadius:8,
    marginBottom:20,
    justifyContent:"center"
  },

  addText:{
    color:"#fff",
    fontWeight:"bold"
  },

  card:{
    backgroundColor:"#fff",
    padding:15,
    borderRadius:10,
    elevation:3
  },

  cardHeader:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:10
  },

  farmName:{
    fontSize:18,
    fontWeight:"bold",
    marginLeft:8
  },

  type:{
    marginBottom:5
  },

  viewButton:{
    marginTop:15,
    backgroundColor:"#4CAF50",
    padding:10,
    borderRadius:6
  },

  viewText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold"
  }

})