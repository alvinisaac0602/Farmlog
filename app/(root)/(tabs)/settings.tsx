import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const Settings = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>

        <Text style={styles.title}>Settings</Text>

        <View style={styles.section}>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="person-outline" size={22} color="#2F7D32" />
            <Text style={styles.itemText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="notifications-outline" size={22} color="#2F7D32" />
            <Text style={styles.itemText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="help-circle-outline" size={22} color="#2F7D32" />
            <Text style={styles.itemText}>Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Ionicons name="information-circle-outline" size={22} color="#2F7D32" />
            <Text style={styles.itemText}>About</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <MaterialIcons name="logout" size={22} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  container: {
    flex: 1,
    padding: 25
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2F7D32",
    marginBottom: 30
  },

  section: {
    marginBottom: 40
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE"
  },

  itemText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333"
  },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2F7D32",
    padding: 16,
    borderRadius: 10
  },

  logoutText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8
  }

})