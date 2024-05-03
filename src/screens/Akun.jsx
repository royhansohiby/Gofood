import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Akun = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Akun ini di buat oleh royhan sohiby</Text>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  text: {
    color: 'black'
  }
})