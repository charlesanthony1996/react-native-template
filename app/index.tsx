import React from "react";
import { 
  View, 
  KeyboardAvoidingView, 
  TextInput, 
  StyleSheet, 
  Text, 
  Platform, 
  TouchableWithoutFeedback, 
  Button, 
  Keyboard } from 
"react-native"


function App() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.inner}>Header</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around'
  }
})

export default App