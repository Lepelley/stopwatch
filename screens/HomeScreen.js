import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTime, resetHistory } from '../store/actions/actions-types'
import Navbar from '../components/Navbar'
import TimeLine from '../styled/TimeLine'

const HomeScreen = ({ navigation }) => {
  const { times } = useSelector(state => state.history)
  const dispatch = useDispatch()

  return (
    <View>
      <Navbar navigation={navigation} />

      <View>
        {times.map((time, index) => (
            <TimeLine key={index}>
              <Text>
                {index + 1}. chrono : {calculateTime(time)}
              </Text>
            </TimeLine>
        ))}
      </View>

      <View>
        {times.length > 0 && (
          <TouchableOpacity onPress={() => dispatch(resetHistory())} style={styles.button}>
            <Text>Reset</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  }
});
