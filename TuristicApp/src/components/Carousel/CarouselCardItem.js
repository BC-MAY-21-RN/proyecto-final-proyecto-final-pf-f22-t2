import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 2
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      {/* <Text style={styles.body}>{item.body}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    width: ITEM_WIDTH,
    paddingBottom: 20,
    shadowColor: "#f75f6a",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.49,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
    borderRadius: 10,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem
