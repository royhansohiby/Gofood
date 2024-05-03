
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Beranda = () => {
  return (
    <View>
      <Image source={require("../../assets/makanan.jpg")}/>
      <Text>Beranda</Text>
    </View>
  )
}

export default Beranda

const styles = StyleSheet.create({})