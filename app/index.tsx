import React from "react"
import { StyleSheet, Text, View, SectionList, StatusBar} from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

function App() {

  const data = [
    {
      title: 'main dishes',
      data: ['pizza', 'burger', 'risotto']
    },
    {
      title: 'sides',
      data: ['fresh fries', 'onion rings', 'fried shrimps']
    },
    {
      title: 'drinks',
      data: ['water', 'coke', 'beer']
    },
    {
      title: 'desserts',
      data: ['cheese cake', 'ice cream']
    }
  ]


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>Item</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        
        >
        </SectionList>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: 'green',
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
  }
})

export default App