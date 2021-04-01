import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeTime, start, stop, reset, addHistory, calculateTime } from '../store/actions/actions-types'
import Navbar from '../styled/Navbar'

const Chrono = () => {
  const { timer, time } = useSelector(state => state.timer)
  const dispatch = useDispatch()

  const handleStart = () => {
    const timer = setInterval(() => {
      dispatch(changeTime())
    }, 1000)
    dispatch(start({ timer }))
  }

  const handleAddHistory = () => {
    dispatch(addHistory({time}))
  }

  return (
    <>
      <Text>{calculateTime(time)}</Text>

      <Navbar>
        {timer === null && <TouchableOpacity onPress={() => handleStart()} style={styles.button}>
          <Text>Start</Text>
        </TouchableOpacity>}
        {timer && <TouchableOpacity onPress={() => dispatch(stop())} style={styles.button}>
          <Text>Stop</Text>
        </TouchableOpacity>}
        {time !== 0 && (
          <TouchableOpacity onPress={() => dispatch(reset())} disabled={time === 0} style={styles.button}>
            <Text>Reset</Text>
          </TouchableOpacity>
        )}
        {timer === null && time !== 0 && <TouchableOpacity onPress={() => handleAddHistory()} style={styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>}
      </Navbar>
    </>
  )
}

export default Chrono

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  }
});