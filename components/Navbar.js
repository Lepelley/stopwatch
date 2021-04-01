import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'
import Chrono from '../components/Chrono'
import Navbar from '../styled/Navbar'

const NavbarComponent = ({ navigation }) => {
  return (
    <View>
      <Navbar>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chrono')} style={styles.button}>
          <Text>Chrono</Text>
        </TouchableOpacity>
      </Navbar>
    </View>
  )
}

export default NavbarComponent

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  }
});