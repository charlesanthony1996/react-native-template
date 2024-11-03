import { NavigationContainer } from "@react-navigation/native"
import React, { useRef, useState } from "react"
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native"


const App = () => {
    const drawer = useRef<DrawerLayoutAndroid>(null)
    const [drawerPosition, setDrawerPosition ] = useState<'left' | 'right'>('left')


    const changeDrawerPosition = () => {
        if (drawerPosition === 'left') {
            setDrawerPosition('right')
        } else {
            setDrawerPosition('left')
        }
    }

    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>
                Im in the drawer
            </Text>
            <Button
            title="Close drawer"
            onPress={() => drawer.current?.closeDrawer()}
            >
            </Button>
        </View>
    )

    return (
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
        >
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Drawer on the {drawerPosition}!
                </Text>
                <Button
                title="Change drawer position"
                onPress= {() => changeDrawerPosition()}
                >
                </Button>
                <Text style={styles.paragraph}>
                    Swipe from the side or press button below to see it!
                </Text>
                <Button title="Open Drawer" onPress={() => drawer?.current?.openDrawer}>
                </Button>
            </View>
        </DrawerLayoutAndroid>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1'
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center'
    }
})

export default App