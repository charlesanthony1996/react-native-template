import React from "react"
import { StyleSheet, Text, TouchableHighlight, View} from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>

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
    
  }

})

export default App