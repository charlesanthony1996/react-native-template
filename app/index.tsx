import React, { useState} from "react"
import { Switch, StyleSheet } from "react-native"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"



function App() {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState )

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Switch
        ios_backgroundColor={'none'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        >
        </Switch>

      </SafeAreaView>
    </SafeAreaProvider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App