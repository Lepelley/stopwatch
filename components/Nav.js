import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import ChronoScreen from '../screens/ChronoScreen'

const Stack = createStackNavigator()

const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Chrono' component={ChronoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Nav