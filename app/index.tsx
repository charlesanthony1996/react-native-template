import { Text, View, StyleSheet } from "react-native"
import React from "react"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { ActivityIndicator } from "react-native-paper"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})


function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, styles.horizontal]}>
        <ActivityIndicator></ActivityIndicator>
        <Text>This is my way of showing things</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
        <ActivityIndicator size="small" color="grey"></ActivityIndicator>
        <ActivityIndicator size="large" color="green"></ActivityIndicator>
        <ActivityIndicator size="large" color="black"></ActivityIndicator>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App