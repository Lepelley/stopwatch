import { Button, View } from 'react-native'
import React from 'react'
import Chrono from '../components/Chrono'
import Navbar from '../components/Navbar'

const ChronoScreen = ({ navigation }) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Chrono />
      </View>
    </>
  )
}

export default ChronoScreen
