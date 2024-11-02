import React, { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableHighlight, View} from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"



function App() {

  const [count, setCount] = useState(0)
  const onPress = () => setCount(count + 1)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableHighlight onPress={onPress}>
          <View style={styles.button}>
            <Text>Touch here</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{count || null}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#dddddd',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#ff00ff'
  }
})

export default App